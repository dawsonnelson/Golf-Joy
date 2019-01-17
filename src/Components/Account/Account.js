import React, {Component} from 'react';
import './Account.css'
import Nav from '../Nav/Nav';
import {connect} from 'react-redux'
import {updateUser} from '../../ducks/reducer'
import axios from 'axios';

class Account extends Component{

    

    componentDidMount(){
        axios.get('/api/userData')
        .then(res=>{
            console.log(res)
            let userData = res
            this.props.updateUser(userData.data.id)
            console.log(this.props.updateUser(userData.data.id))
            console.log(this.props.user)
        })
        // console.log(userData)
    }

    Logout(){
        axios.get('/api/logout')
        let path = '/'
        this.props.history.push(path)
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <Nav url = '/'/>
                <div className = 'account-body'>
                    <div className = 'a-body-left'>
                        <div className = 'left-content'>
                                <h2 className = 'my-account'>My Account</h2>
                                <h1 className = 'accout-home'>Home</h1>
                                <h1 className = 'accout-info'>My Information</h1>
                                <h1 className = 'accout-address'>Addresses</h1>
                                <h1 className = 'accout-order'>Order History</h1>
                        </div>
                    </div>
                    <div className = 'a-body-right'>
                        <h1 className = 'right-my-account'>My Account</h1>
                        <h1 className = 'testya'>Dawson Nelson Log out</h1><button onClick={this.Logout.bind(this)}>Log out</button>
                        <h2 className = 'right-my-info'>MY INFORMATION</h2>
                        <h1 className = 'show-or'>Show or update your personal information</h1>
                        <h2 className = 'right-address'>ADDRESSES</h2>
                        <h1 className = 'show-or'>Manage your billing and shipping addresses</h1>
                        <h2 className = 'right-orders'>ORDERS</h2>
                        <h1 className = 'show-or'>Check the status of your orders or see past orders</h1>
                        
                    </div>
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

export default connect(mapStateToProps, {updateUser})(Account);