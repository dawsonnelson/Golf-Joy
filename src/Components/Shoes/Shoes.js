import React, {Component} from 'react';
import './Shoes.css';
import Nav from '../../Components/Nav/Nav';
import {connect} from 'react-redux';
import axios from 'axios'

class Shoes extends Component{
    constructor(props){
        super(props);

        this.state = {
            stuff: [],
            filter: ''
        }
    }

    componentDidMount(){
        axios.get('/api/getShoes')
        .then(res=>{
            console.log(res.data)
            this.setState({
                stuff: res.data
            })
            console.log(this.state)
        })
    }

    setFilter(test){
        console.log(test)
            this.setState({
                filter: test
            })
    }

    renderItems(){
        if(this.state.filter === ''){
            return this.state.stuff.map((products) => {
                return(
                    <div className = 'item-container'>
                        <div className = 'item-top'><img className = 'shoe-item-top' src={products.image} alt = '' /></div>
                        <div className = 'item-bottom'>
                            <div className = 'item-name'>{products.name}</div>
                            <div className = 'item-price'>${products.price}</div>
                        </div>
                    </div>
                )
            })
        } else {
            return this.state.stuff.filter(property => property.subtype === this.state.filter).map((products) => {
                return(
                    <div className = 'item-container'>
                        <div className = 'item-top'><img className = 'shoe-item-top' src={products.image} alt = '' /></div>
                        <div className = 'item-bottom'>
                            <div className = 'item-name'>{products.name}</div>
                            <div className = 'item-price'>${products.price}</div>
                        </div>
                    </div>
                )
            })
        }
    }

    render(){
        return(
            <div>
                <Nav url = '/'/>
                <div className = 'shoe-pic-container'><img className = 'shoe-pic' src='https://www.fj1857.com/on/demandware.static/-/Library-Sites-FootJoySharedLibrary/default/dw3594c34e/1857-PLP-Hero-Banner-Shoes.jpg' alt=''/></div>
                <div className = 'shoe-body'>
                    <div className = 'SBNav'>
                        <span className = 'filter-span-1'>Filter by</span>
                        <span className = 'filter-span'>ALL</span>
                        <button className = 'filter-span' onClick={() => this.setFilter('Golf')}>GOLF</button>
                        <button className = 'filter-span' onClick={() => this.setFilter('Dress')}>DRESS</button>
                        <button className = 'filter-span' onClick={() => this.setFilter('Casual')}>CASUAL</button>
                    </div>
                    <div className = 'shoe-item-container'>
                    {this.renderItems()}
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

export default connect(mapStateToProps, {})(Shoes);