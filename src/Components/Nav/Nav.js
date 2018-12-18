import React, {Component} from 'react';
import './Nav.css'
import leftsym from '../../Assets/left-sym.png'

export default class Nav extends Component{

    render(){
        return(
            <div className = 'nav'>
                <div className = 'nav-left'></div>
                <div className = 'nav-center'>
                    <div className = 'center-stuff1'>Shoes</div>
                    <div className = 'center-stuff2'>Apparel</div>
                    <div className = 'center-stuff3'>Craftmanship</div>
                </div>
                <div className = 'nav-right'></div>
            </div>
        )
    }
}