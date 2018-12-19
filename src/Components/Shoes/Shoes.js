import React, {Component} from 'react';
import './Shoes.css';
import Nav from '../../Components/Nav/Nav';

export default class Shoes extends Component{
    constructor(props){
        super(props);

        this.state = {
            number: 3
        }
    }

    renderItems(){
        return(
            <div className = 'item'>
            
            </div>
        )
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
                        <span className = 'filter-span'>GOLF</span>
                        <span className = 'filter-span'>DRESS</span>
                        <span className = 'filter-span'>CASUAL</span>
                    </div>
                    <div className = 'shoe-item-container'>
                    {/* renderItems */}
                    <div className = 'item-container'>
                        <div className = 'item-top'><img className = 'shoe-item-top' src={'http://dummyimage.com/300x300.bmp/cc0000/ffffff'} alt = '' /></div>
                        <div className = 'item-bottom'></div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}