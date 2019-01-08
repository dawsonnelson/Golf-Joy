import React, {Component} from 'react';
import './ProductPage.css';
import Nav from '../../Components/Nav/Nav'
import {connect} from 'react-redux';
import axios from 'axios'

class ProductPage extends Component{
    constructor(props){
        super(props);

    
}


render(){
    return(
        <div>
            <Nav url = '/'/>
            <div className = 'product-1'>
                <div className = 'product-info'></div>
                <div className = 'product-image'></div>
            </div>
        </div>
    )
}

}

function mapStateToProps(duckState) {
    return {
    }
}

export default connect(mapStateToProps, {})(ProductPage);