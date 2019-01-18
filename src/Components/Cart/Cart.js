import React, {Component} from 'react';
import './Cart.css'
import Nav from '../Nav/Nav';
import {connect} from 'react-redux'
import {updateUser} from '../../ducks/reducer'
// import Select from 'react-select'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

class Cart extends Component{
    constructor(props){
        super(props);

        this.state ={
            products: [],
            total: 0
        }
    }

    componentDidMount(){
        axios.get('/api/getCart')
        .then(res=>{
            // console.log(res.data)
            this.setState({
                products: res.data,
            })
            this.updateTotal()
        })
        axios.get('/api/userData')
        .then(res=>{
            let userData = res
            this.props.updateUser(userData.data.id)
        })
    }

    updateTotal(){
        this.state.products.map((product) => {
            // console.log(product)
            let doo = (product.price * 100 )+ this.state.total
            this.setState({
                total: doo
            })
        })
    }

    removeItemFromCart(i){
        // console.log(i);
        let id = i
        console.log(id)
        axios.delete(`/api/removeItem/${id}`);
        console.log(this.state)
        console.log(i)
        window.location.reload()
    }

    // removeItemFromCart(i){
    //     var array = this.state.products.map(function(e) { return e.id; }).indexOf(i)
    //     console.log(array)
    //     // if(index !== -1);
    //     this.state.products.splice(array, 1);
    //     // this.setState({products: array});
    //     // console.log(i);
    //     let id = i
    //     // console.log(id)
    //     axios.delete(`/api/removeItem/${id}`);
    //     // console.log(this.state)
    //     // console.log(index)
    // }

      onToken = token => {
        token.card = void 0;
        axios.post("/api/payment", { token, amount: this.state.total})
          .then(res => {
            console.log(res);
            axios.post('/api/email', {products: this.state.products, amount: this.state.total});
            axios.delete('/api/clearCart');
            window.location.reload();
          });
      };

    renderProducts(){
        return this.state.products.map((product) => {
        
            return(
                <div className = 'other-info'>
                        {/* <img className = 'cart-image' src={''} alt={''}/> */}
                            <div className = 'cart-image'><img classname = 'cart-pic' src ={product.image} alt = '' height="100%" width="100%"></img></div>
                            <div className = 'cart-item-info'>{product.name}</div>
                            <div className = 'qty-div'>
                                {/* <Select classname='qty-select' options = {options} placeholder = '1'/> */}
                                {/* <span className='remove'>REMOVE</span> */}
                            </div>
                            <div className = 'item-price-div'>
                                <span className = 'item-price-in-div'>${product.price}</span>
                                <button className = 'remove-item' onClick={() => this.removeItemFromCart(product.id)}>Remove</button>
                            </div>
                            <span className = 'total'>${this.state.total}</span>
                        </div>
            )
        })
    }

    render(){
        console.log(this.state)
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
                    <div className = 'above-items'><span className='my-bag'>My Bag</span>
                    {/* <button className='checkout-button'>CHECKOUT</button> */}
                    <StripeCheckout token={this.onToken} stripeKey={process.env.REACT_APP_STRIPE_KEY}/>
                    </div>
                    <div className = 'all-info'>
                        <div className = 'top-info'>
                            <span className = 'product-text'>PRODUCT</span>
                            <span className = 'quanity-text'>QTY</span>
                            <span className = 'price-text'>PRICE</span>
                            <span className = 'total-text'>TOTAL PRICE</span>
                        </div>
                        {this.renderProducts()}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(duckState) {
    return {
        user: duckState.user
    }
}

export default connect(mapStateToProps, {updateUser})(Cart);




// Make it so the cart clears on pay