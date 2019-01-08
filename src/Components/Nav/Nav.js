import React, {Component} from 'react';
import './Nav.css'
import { Link } from 'react-router-dom'
import leftsym from '../../Assets/left-sym.png'
import {connect} from 'react-redux'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

class Nav extends Component{
    constructor() {
        super();

        this.state = {
            ya: false
        }
    }

    login() {
        let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
        let url = `${encodeURIComponent(window.location.origin)}/auth/callback`
        window.location =  `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
        console.log(window.location)
    }


    render(){
        return(
            <div className = 'nav-container'>
                <div className = 'nav-left'><Link to ="/" className = 'logo-link'><img className = 'logo' src={leftsym} alt ='' /></Link></div>
                <div className = 'nav-center'>
                    <div className = 'center-stuff1'><Link to ="/Shoes">SHOES</Link></div>
                    <div className = 'center-stuff2'><Link to ="/Apparel">APPAREL</Link></div>
                    <div className = 'center-stuff3'><Link to ="/Gear">CRAFTMANSHIP</Link></div>
                </div>
                <div className = 'nav-right'>
                    <div className = 'login-link'><button onClick = {this.login}>Log in</button></div>
                    <div className = 'cart-link'><Link to ="/Cart" className = 'cart-to-link'><span className='cart-text'>Cart</span><AddShoppingCartIcon /></Link></div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(duckState) {
    return {
    }
}

export default connect(mapStateToProps, {})(Nav);

//video tag test for video