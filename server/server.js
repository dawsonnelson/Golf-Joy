require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const bodyParser = require('body-parser');
const axios = require('axios')


const {
    SERVER_PORT,
    CONNECTION_STRING,
    REACT_APP_DOMAIN,
    REACT_APP_CLIENT_ID,
    REACT_APP_CLIENT_SECRET,
    SECRET
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
    console.log(resWithToken.data)


    let resWithUserData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`)

    console.log('user data', resWithUserData.data)

    let {
        email,
        name,
        picture,
        sub
    } = resWithUserData.data;

    console.log(email)
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