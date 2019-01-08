import React, {Component} from 'react';
import './Gear.css';
import Nav from '../../Components/Nav/Nav';
import {connect} from 'react-redux';
import axios from 'axios'

class Gear extends Component{
    constructor(props){
        super(props);

        this.state = {
            stuff: []
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

    renderItems(){
        return this.state.stuff.map((products) => {
            return(
                <div className = 'item-container'>
                    <div className = 'item-top'><img className = 'shoe-item-top' src={products.image} alt = '' /></div>
                    <div className = 'item-bottom'>
                        <div className = 'item-name'>{products.name}</div>
                        <div className = 'item-price'>$500</div>
                    </div>
                </div>
            )
        })
    }

    render(){
        return(
            <div>
                <Nav url = '/'/>
                <div className = 'gear-pic-container'><img className = 'gear-pic' src='https://images.unsplash.com/photo-1530028828-25e8270793c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt=''/></div>
                <div className = 'gear-body'>
                    <div className = 'GNav'>
                        <span className = 'filter-span-1'>Filter by</span>
                        <span className = 'filter-span'>ALL</span>
                        <span className = 'filter-span'>GOLF CLUBS</span>
                    </div>
                    <div className = 'gear-item-container'>
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

export default connect(mapStateToProps, {})(Gear);