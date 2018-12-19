import React, {Component} from 'react';
import Nav from '../Nav/Nav'

export default class Login extends Component{

    render(){
        return(
            <div className = 'login'>
                <Nav url = '/login'/>
                <div className = 'login-left'></div>
                <div className = 'login-right'></div>
            </div>
        )
    }
}