import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/index'
import Timer from './pages/Timer/index'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/">
                    <Home />
                </Route>
                <Route path='/timer'>
                    <Timer />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;