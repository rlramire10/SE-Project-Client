import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Login/Login'
import Shop from './Shop/Shop'
import Home from './Home/Home';
import EmployeeDetail from "./EmployeeDetails/EmployeeDetails";
import Registration from "./Registration/Registration";

import './Main.css'

const Main = () =>{

    return(
        <div>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/shop' component={Shop}/>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/test' component={Registration}/>
                <Route exact path='/employd' component={EmployeeDetail}/>
            </Switch>
        </div>
    )
}

export default Main;