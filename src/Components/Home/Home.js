import React, {Component} from 'react';
import './Home.css'
import Nav from '../Nav/Nav';
import ReactPlayer from 'react-player';

export default class Home extends Component{

    render(){
        return(
            <div>
                <Nav url = '/'/>
                <div className ='video-container'>
                    <ReactPlayer className='video' url='https://acushnet.scene7.com/is/content/footjoy/FJ%201857/slot-1-homepage-loop.mp4' width='100%'
                    height='100%' playing/>
                </div>
                <div className = 'body'>
                    hi
                </div>
            </div>
        )
    }
} 