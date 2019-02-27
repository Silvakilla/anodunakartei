import './styles.css';
import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './container/home/home';
import { PageNotFound } from "./container/errorPages/errorPages";
import Login from "./container/login/login";
import KeepRecords from "./container/keepRecords/keepRecords";

render(
    <Fragment>
        <CssBaseline/>
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/home'} component={Home}/>
                <Route path={'/login'} component={Login}/>
                <Route path={'/records'} component={KeepRecords}/>
                <Route component={PageNotFound}/>
            </Switch>
        </BrowserRouter>
    </Fragment>,
    document.getElementById('app')
);