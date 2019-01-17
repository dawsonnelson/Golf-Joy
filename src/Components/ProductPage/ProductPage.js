import React, {Component} from 'react';
import './ProductPage.css';
import Nav from '../../Components/Nav/Nav'
import {connect} from 'react-redux';
// import {toggle} from '../../Logic/logic'
import {updateProduct} from '../../ducks/reducer'
import {updateCart} from '../../ducks/reducer'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios'



// import axios from 'axios'

class ProductPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            thing:[],
            Button: false,
            age: ''
        }
}

componentDidMount(){
}

descriptionButton(){
    this.setState({
        Button: false
    })
}

detailsButton(){
    this.setState({
        Button: true
    })
}

handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

addToCart(i){
    console.log(i)
    let id = i
    let num = 1
    axios.post('/api/setCart', {id}).then(
        this.props.updateCart(num)
    )
    console.log(this.props.cart)
}


render(){
    console.log(localStorage.getItem( "Data" ))
    const recipe = JSON.parse( localStorage.getItem( "Data" ) );
    const Button = this.state.Button;
    let info = true
    if(Button === true){
        info = recipe.details
    } else {
        info = recipe.description
    }

    return(
        <div>
            <Nav url = '/'/>
            <div className = 'product-1'>
                <div className = 'product-info'>
                    <div className = 'info-div'>
                        <span className = 'product-page-item-name'>{recipe.name}</span>
                        <span className = 'product-page-item-price'>${recipe.price}</span>
                        <div className = 'button-div'>
                            <button className = 'description-button' onClick={() => this.descriptionButton()}>Description</button>
                            <button className = 'details-button' onClick={() => this.detailsButton()}>Details</button>
                        </div>
                        <div className = 'desc-detail-div'>
                            <span className = 'product-page-item-info'>
                                {info}
                            </span>
                        </div>
                    </div>
                </div>
                <div className = 'product-image'><img className = 'product-page-picture' src={recipe.image} alt=''/></div>
            </div>
            <div className = 'product-2'>
                <div className = 'product-info2'>
                    <div className = 'info-div2'>
                        <div className = 'mistake'>
                            <div className = 'ppin'>
                                <span className = 'product-page-item-name2'>{recipe.name}</span>
                            </div>
                            <div className = 'ppip'>
                                <span className = 'product-page-item-price2'>${recipe.price}</span>
                            </div>
                        </div>
                        <div className = 'order-div'>
                            <button className = 'order-button' onClick={() =>this.addToCart(recipe)}>Add to Cart</button>
                            <FormControl className='qty-button'>
                                <InputLabel htmlFor="age-helper">qty</InputLabel>
                                <Select
                                value={this.state.age}
                                onChange={this.handleChange}
                                input={<Input name="age" id="age-helper" />}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>

                            </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className = 'product-image2'>
                    <img className = 'product-page-picture' src={recipe.image} alt=''/>
                    <img className = 'product-page-picture' src={recipe.image2} alt=''/>
                </div>
            </div>
        </div>
    )
}

}

function mapStateToProps(duckState) {
    return {
        product: duckState.product,
        cart: duckState.cart
    }
}

export default connect(mapStateToProps, {updateProduct, updateCart})(ProductPage);