import React, {Component} from 'react';
import './ProductPage.css';
import Nav from '../../Components/Nav/Nav'
import {connect} from 'react-redux';
import {toggle} from '../../Logic/logic'
import {updateProduct} from '../../ducks/reducer'
import { Button } from '@material-ui/core';
// import axios from 'axios'

class ProductPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            thing:[],
            Button: false
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
                
                </div>
                <div className = 'product-image2'>
                    <img className = 'product-page-picture' src={recipe.image} alt=''/>
                </div>
            </div>
        </div>
    )
}

}

function mapStateToProps(duckState) {
    return {
        product: duckState.product
    }
}

export default connect(mapStateToProps, {updateProduct})(ProductPage);