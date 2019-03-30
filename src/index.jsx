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

/*
Context statt props verwenden
klappt bisher nicht
benötigt provider & consumer
solange localstorage used:
    1x JWT-Token für Login
    1x JWT-Token für API-Kommunikation
JWT im Context speichern
 */
const KarteiContext = React.createContext({
    global: {
        user: undefined,
        jwt: undefined,
        permission: 'user'
    }
});

render(
    <Fragment>
        <CssBaseline/>
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/home'} component={Home}/>
                <Route path={'/login'} component={Login}/>
                <Route path={'/register'} component={Register}/>
                <Route path={'/records'} component={KeepRecords}/>
                <Route component={PageNotFound}/>
            </Switch>
        </BrowserRouter>
    </Fragment>,
    document.getElementById('app')
);