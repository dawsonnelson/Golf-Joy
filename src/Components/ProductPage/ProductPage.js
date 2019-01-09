import React, {Component} from 'react';
import './ProductPage.css';
import Nav from '../../Components/Nav/Nav'
import {connect} from 'react-redux';
import {toggle} from '../../Logic/logic'
import {updateProduct} from '../../ducks/reducer'
// import axios from 'axios'

class ProductPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            thing:[]
        }
    // this.saveToLocal.this.saveToLocal.bind(this)
}

componentDidMount(){
    // this.saveToLocal()
    // const recipe = JSON.parse( localStorage.getItem( "Data" ) );
    // this.props.updateProduct(recipe)
    // console.log(recipe)

    // this.setState({
    //     thing: this.props.product.name
    // })


    // console.log(localStorage.getItem( "Data" ))
    // console.log(this.props.product)
    // // console.log(toggle(true)) keep this
    // console.log(this.state.thing)
}

// saveToLocal(){
//     const local = this.props.product;
//     localStorage.setItem('Data', JSON.stringify(local));
// }


render(){
    console.log(localStorage.getItem( "Data" ))
    const recipe = JSON.parse( localStorage.getItem( "Data" ) );
    // console.log(this.state.thing)
    // console.log(recipe.name)
    return(
        <div>
            <Nav url = '/'/>
            <div className = 'product-1'>
                <div className = 'product-info'></div>
                <div className = 'product-image'>{recipe.name}</div>
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