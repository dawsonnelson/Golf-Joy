import React, {Component} from 'react';
import './Home.css'
import Nav from '../Nav/Nav';
import {connect} from 'react-redux'
// import {toggle} from '../../Logic/logic'
//toggle is for the function tests


class Home extends Component{

    render(){
        return(
            <div>
                <Nav url = '/'/>
                <div className ='video-container'>
                    <video className='video' src='https://acushnet.scene7.com/is/content/footjoy/FJ%201857/slot-1-homepage-loop.mp4' autoPlay muted loop = "true" width='100%'
                    height='100%'/>
                </div>
                <div className = 'body'>
                    <h6 className = 'filler'>Golf Joy</h6>
                    <span className = 'under-filler'>Devoted to crafting the finest golf ware</span>
                    <span className = 'under-under'>of incomparable quality and design</span>
                </div>
            </div>
        )
    }
}

function mapStateToProps(duckState) {
    return {
    }
}

export default connect(mapStateToProps, {})(Home);