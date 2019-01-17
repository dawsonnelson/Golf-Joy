require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const bodyParser = require('body-parser');
const stripe = require("stripe")("sk_test_U9uHAjmLFwCjbC6GTyxqaktj");
const axios = require('axios');
const nodemailer = require("nodemailer");

const {
    SERVER_PORT,
    CONNECTION_STRING,
    REACT_APP_DOMAIN,
    REACT_APP_CLIENT_ID,
    REACT_APP_CLIENT_SECRET,
    SECRET,
    PASS
} = process.env

const app = express();

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db is connected');
})

//midleware
app.use(bodyParser.json());

app.use(session({
    secret: SECRET,
    resave:false,
    saveUninitialized: true
}))

app.use(express.static( `${__dirname}/../build`) );

app.use(express.json());


  app.post('/api/email', (req, res) =>{
      const { amount } = req.body.amount
      const { products } = req.body.products
      console.log(amount)
    //   console.log({amount})
        let user = req.session.user.email

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            port: 25,
            auth: {
                user: 'golfjoyfun@gmail.com',
                pass: PASS
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        let HelperOptions = {
            from: '"Golf Joy" <golfjoyfun@gmail.com',
            to: user,
            subject: 'Hello, world!',
            text: "Hello thank you for your purchase of", amount
        };

        transporter.sendMail(HelperOptions, (error, info) => {
            if (error) {
            return console.log(error);
            }
            console.log("The message was sent!");
            // console.log(info);
        });
        })

//endpoints
app.get('/auth/callback', async (req, res) => {
    // use code from query in payload for token
    const payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: REACT_APP_CLIENT_SECRET,
        code: req.query.code, 
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
    }

    // trade code for token 
    let resWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload)
    //use token to get user data
    // console.log(resWithToken.data)


    let resWithUserData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`)

    // console.log('user data', resWithUserData.data)

    let {
        email,
        name,
        picture,
        sub
    } = resWithUserData.data;

    // console.log(email)
   let db = req.app.get('db');
   let foundUser = await db.find_user([sub])
    if(foundUser[0]) {
        req.session.user = foundUser[0]
        res.redirect('/#/Account'); 
    } else {
      let createdUser = await db.create_user([name, email, picture, sub])
      req.session.user = createdUser[0];
      res.redirect('/#/Account');
    }
})

// function envCheck(req, res, next) {
//     if (NODE_ENV === 'dev'){
//       console.log(NODE_ENV)
//     req.app.get('db').get_user_by_id()
//            .then(userWithIdOne => {
//              req.session.user = userWithIdOne[0]
//              next();
//            })
//    } else {
//      next();
//    }
//    } 

app.post('/api/payment', (req, res) => {
    const { amount, token:{id} } = req.body //destruct
    stripe.charges.create(                 //create new
       {
          amount: amount,
          currency: "usd",
          source: id,
          description: "Charge it to Stripe Test..."
       },
       (err, charge) => {                  //err handling
          if(err){
            //  console.log(err)
             return res.status(500).send(err) //webserver err
          } else {
            //  console.log(charge)
             return res.status(200).send(charge)
          }
       }
    )
})

app.post('/api/setCart', (req, res) => {
    const id = req.body.id.id
    // console.log(id)
    const userid = req.session.user.id
    const image = req.body.id.image
    const name = req.body.id.name
    const price = req.body.id.price
    // console.log(req.body.id.name)
    // console.log(req.body.id.price)
    // console.log(req.body.id.type)
    // console.log(req.body.id.subtype)
    // console.log(req.body.id.image)
    // console.log(req.body.id.image2)
    // console.log(req.body.id.description)
    // console.log(req.body.id.details)
    // console.log(req.session.user.id)
    const db = req.app.get('db')
    db.set_cart(id, userid, image, name, price)
})

app.delete('/api/clearCart', (req, res) => {
    console.log('clear')
    console.log(req.session.user.id)
    const db = req.app.get('db')
    db.clear_cart(req.session.user.id)
})

app.delete('/api/removeItem/:id', (req, res) => {
    console.log(req.params)
    let {id} = req.params
    // const item = req.body
    const db = req.app.get('db')
    db.remove_item([id])
})

app.get('/api/getCart', (req, res) =>{
    console.log(req.session.user.id)
    let userid = req.session.user.id
    const db = req.app.get('db')
    db.get_cart(userid)
    .then(resp=>{
        res.status(200).send(resp)
    })
})

app.get('/api/userData', (req, res) => {
    if(req.session.user){
        res.status(200).send(req.session.user);
    } else {
    res.status(401).send("FAILURE")
    }
})

app.get(`/api/getShoes`, (req, res) =>{
    const db = req.app.get('db')
    db.get_shoe()
    .then(resp=>{
        res.status(200).send(resp)
    })
})

app.get('/api/getApparel', (req, res) =>{
    const db = req.app.get('db')
    db.get_apparel()
    .then(resp=>{
        res.status(200).send(resp)
    })
})

app.get('/api/logout', (req, res) => {
    req.session.destroy();
})

// app.get('/api/getGolfShirt', (req, res) =>{
//     const db = req.app.get('db')
//     db.get_golfShirt()
//     .then(resp=>{
//         res.status(200).send(resp)
//     })
// })

app.listen(SERVER_PORT, () => console.log(`Listing on port ${SERVER_PORT}`))



// if having issues with auth0 Remember about Proxy server
//npm i http-proxy-middleware