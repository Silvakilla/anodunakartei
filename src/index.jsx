import './styles.css';
import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './container/home/home';
import { PageNotFound } from "./container/errorPages/errorPages";
import Login from "./container/login/login";
import KeepRecords from "./container/keepRecords/keepRecords";
import Register from "./container/register/register";
import AuthProvider from './components/authController/authController';
import {ProtectedRoute} from './components/protectedRoute/protectedRoute';
import {UnAuthedRoute} from './components/unAuthedRoute/unAuthedRoute';

render(
    <AuthProvider>
        <Fragment>
            <CssBaseline/>
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/home'} component={Home}/>
                    <UnAuthedRoute path={'/login'} component={Login}/>
                    <UnAuthedRoute path={'/register'} component={Register}/>
                    <ProtectedRoute path={'/records'} component={KeepRecords}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </BrowserRouter>
        </Fragment>
    </AuthProvider>,
    document.getElementById('app')
);