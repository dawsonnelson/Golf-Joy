import React, {Component} from 'react';
import './Cart.css'
import Nav from '../Nav/Nav';
import {connect} from 'react-redux'
import Select from 'react-select'

class Cart extends Component{

    render(){
        const options = [
            {label: 1, value: 1, className: 'custom-class'},
            {label: 2, value: 2, className: 'awesome-class'},
            {label: 3, value: 3, className: 'custom-class'},
            {label: 4, value: 4, className: 'awesome-class'},
            {label: 5, value: 5, className: 'custom-class'},
            {label: 6, value: 6, className: 'awesome-class'},
            {label: 7, value: 7, className: 'custom-class'},
            {label: 8, value: 8, className: 'awesome-class'},
            {label: 9, value: 9, className: 'custom-class'},
            {label: 10, value: 10, className: 'awesome-class'}
            // more options...
        ];
        return(
            <div>
                <Nav url = '/'/>
                <div className = 'cart-body'>
                    <div className = 'above-items'><span className='my-bag'>My Bag</span><button className='checkout-button'>CHECKOUT</button></div>
                    <div className = 'all-info'>
                        <div className = 'top-info'>
                            <span className = 'product-text'>PRODUCT</span>
                            <span className = 'quanity-text'>QTY</span>
                            <span className = 'price-text'>PRICE</span>
                            <span className = 'total-text'>TOTAL PRICE</span>
                        </div>
                        <div className = 'other-info'>
                            {/* <img className = 'cart-image' src={''} alt={''}/> */}
                            <div className = 'cart-image'/>
                            <div className = 'cart-item-info'></div>
                            <div className = 'qty-div'>
                                <Select classname='qty-select' options = {options} placeholder = '1'/>
                                {/* <span className='remove'>REMOVE</span> */}
                            </div>
                            <div className = 'item-price-div'>
                                <span className = 'item-price-in-div'>$750</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(duckState) {
    return {
    }
}

export default connect(mapStateToProps, {})(Cart);