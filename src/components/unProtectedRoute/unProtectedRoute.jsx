import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthConsumer } from '../authController/authController';

export const UnAuthedRoute = ({ component: Component, ...rest}) => (
    <AuthConsumer>
        {({isAuthenticated}) => (
            <Route render={(props) => !isAuthenticated ? <Component {...props} /> : <Redirect to='/'/>} {...rest} />
        )}
    </AuthConsumer>
);