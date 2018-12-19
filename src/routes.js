import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../src/Components/Home/Home'
import Login from '../src/Components/Login/Login'
import Shoes from '../src/Components/Shoes/Shoes'
import Apparel from '../src/Components/Apparel/Apparel'

export default (
    
    <Switch>
        <Route exact path = '/' component={Home}/>
        <Route path = '/Login' component={Login}/>
        <Route path = '/Shoes' component={Shoes}/>
        <Route path = '/Apparel' component={Apparel}/>
    </Switch>
)