import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../src/Components/Home/Home'
import Login from '../src/Components/Login/Login'
import Shoes from '../src/Components/Shoes/Shoes'
import Apparel from '../src/Components/Apparel/Apparel'
import Gear from '../src/Components/Gear/Gear'
import Cart from '../src/Components/Cart/Cart'
import Account from '../src/Components/Account/Account'
import ProductPage from '../src/Components/ProductPage/ProductPage'

export default (
    
    <Switch>
        <Route exact path = '/' component={Home}/>
        <Route path = '/Login' component={Login}/>
        <Route path = '/Shoes' component={Shoes}/>
        <Route path = '/Apparel' component={Apparel}/>
        <Route path = '/Gear' component={Gear}/>
        <Route path = '/Cart' component={Cart}/>
        <Route path = '/Account' component={Account}/>
        <Route path = '/ProductPage' component={ProductPage}/>
    </Switch>
)