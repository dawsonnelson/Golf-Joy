import React, {Component} from 'react';
import './Apparel.css';
import Nav from '../../Components/Nav/Nav';
import {connect} from 'react-redux'
import axios from 'axios'

class Apparel extends Component{
    constructor(props){
        super(props);

        this.state = {
            stuff: [],
            filter: ''
        }

        // this.setFilter=this.setFilter.bind(this)
    }

    componentDidMount(){
        axios.get('/api/getApparel')
        .then(res=>{
            console.log(res.data)
            this.setState({
                stuff: res.data
            })
            console.log(this.state.stuff)
        })
    }

    setFilter(test){
        console.log(test)
            this.setState({
                filter: test
            })
    }

    // getGolfShirts(){
    //     axios.get('/api/getGolfShirt')
    //     .then(res=>{
    //         console.log(res.data)
    //         this.setState({
    //             stuff: res.data
    //         })
    //         console.log(this.state)
    //     })
    // }

    renderItems(){
        if(this.state.filter === ''){
            return this.state.stuff.map((products) => {
                return(
                    <div className = 'item-container'>
                        <div className = 'item-top'><img className = 'shoe-item-top' src={products.image} onMouseOver={e => (e.currentTarget.src = products.image2)} onMouseOut={e => (e.currentTarget.src = products.image)} alt = '' /></div>
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
                        <div className = 'item-top'><img className = 'shoe-item-top' src={products.image} onMouseOver={e => (e.currentTarget.src = products.image2)} onMouseOut={e => (e.currentTarget.src = products.image)} alt = '' /></div>
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
                <div className = 'Apparel-pic-container'><img className = 'apparel-pic' src='https://www.fj1857.com/on/demandware.static/-/Library-Sites-FootJoySharedLibrary/default/dweff8d299/1857-PLP-Hero-Banner-Apparel_Sweaters.jpg' alt=''/></div>
                <div className = 'apparel-body'>
                    <div className = 'APNav'>
                        <span className = 'filter-span-1'>Filter by</span>
                        <button className = 'filter-span'>ALL</button>
                        <button className = 'filter-span' onClick={() => this.setFilter('Golf Shirt')}>GOLF SHIRTS</button>
                        <button className = 'filter-span' onClick={() => this.setFilter('Dress Shirt')}>DRESS SHIRTS</button>
                        <button className = 'filter-span' onClick={() => this.setFilter('Mid Layer')}>MID LAYERS</button>
                        <button className = 'filter-span' onClick={() => this.setFilter('Sweater')}>SWEATERS</button>
                        <button className = 'filter-span' onClick={() => this.setFilter('Bottom')}>BOTTOMS</button>
                        <button className = 'filter-span' onClick={() => this.setFilter('Outerwear')}>OUTERWEAR</button>
                        {/* <span className = 'filter-span'>GLOVE</span> */}
                    </div>
                    <div className = 'apparel-item-container'>
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

export default connect(mapStateToProps, {})(Apparel);