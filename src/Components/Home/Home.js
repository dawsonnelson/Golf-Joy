import React, {Component} from 'react';
import './Home.css'
import Nav from '../Nav/Nav';
import {connect} from 'react-redux'
import {updateUser} from '../../ducks/reducer'
import axios from 'axios';
// import {toggle} from '../../Logic/logic'
//toggle is for the function tests


class Home extends Component{

    componentDidMount(){
        axios.get('/api/userData')
        .then(res=>{
            let userData = res
            this.props.updateUser(userData.data.id)
        })
    }

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
        user: duckState.user
    }
}

export default connect(mapStateToProps, {updateUser})(Home);