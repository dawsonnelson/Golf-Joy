import React, {Component} from 'react';
import './Nav.css'
import { Link } from 'react-router-dom'
import leftsym from '../../Assets/left-sym.png'

export default class Nav extends Component{

    render(){
        return(
            <div className = 'nav-container'>
                <div className = 'nav-left'><Link to ="/" className = 'logo-link'><img className = 'logo' src={leftsym} alt ='' /></Link></div>
                <div className = 'nav-center'>
                    <div className = 'center-stuff1'><Link to ="/Shoes">SHOES</Link></div>
                    <div className = 'center-stuff2'><Link to ="/Apparel">APPAREL</Link></div>
                    <div className = 'center-stuff3'>CRAFTMANSHIP</div>
                </div>
                <div className = 'nav-right'>
                    <div className = 'login-link'><Link to ="/login">Log in</Link></div>
                    <div className = 'cart-link'>Cart</div>
                </div>
            </div>
        )
    }
}