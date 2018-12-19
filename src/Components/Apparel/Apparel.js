import React, {Component} from 'react';
import './Apparel.css';
import Nav from '../../Components/Nav/Nav';

export default class Shoes extends Component{

    render(){
        return(
            <div>
                <Nav url = '/'/>
                <div className = 'Apparel-pic-container'><img className = 'apparel-pic' src='https://www.fj1857.com/on/demandware.static/-/Library-Sites-FootJoySharedLibrary/default/dweff8d299/1857-PLP-Hero-Banner-Apparel_Sweaters.jpg' alt=''/></div>
                <div className = 'apparel-body'>
                    <div className = 'APNav'>
                        <span className = 'filter-span-1'>Filter by</span>
                        <span className = 'filter-span'>ALL</span>
                        <span className = 'filter-span'>GOLF SHIRTS</span>
                        <span className = 'filter-span'>DRESS SHIRTS</span>
                        <span className = 'filter-span'>MID LAYERS</span>
                        <span className = 'filter-span'>SWEATERS</span>
                        <span className = 'filter-span'>BOTTOMS</span>
                        <span className = 'filter-span'>OUTERWEAR</span>
                        <span className = 'filter-span'>GLOVE</span>
                    </div>
                    <div className = 'apparel-item-container'>
                    {/* renderItems */}
                    </div>
                </div>
            </div>
        )
    }
}