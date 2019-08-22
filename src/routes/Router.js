import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import HomePage from '../pages/HomePage/HomePage';
import HomePage2 from '../pages/HomePage2/HomePage2';

export default class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/homepage' component={HomePage2}/>
                    <Redirect to='/'/>
                </Switch>
            </BrowserRouter>
        )
    }
}