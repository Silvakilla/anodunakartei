import "@babel/polyfill";
import React, { Component, createContext } from 'react';
import md5 from 'md5';
import axios from 'axios';

import { GenerateSessionToken } from '../../utils/tokenGenerator';
import config from '../../../config/config';

const AuthContext = createContext({
    
})

export const AuthConsumer = AuthContext.Consumer;

export default class AuthController extends Component {
    handeLogin = (username, password) => {
        axios.get('/api/getOnlyUsernamePassword/' + username, { timeout: 2500 })
            .then((result) => {
                let user = {
                    username: result.data.result[0].username,
                    password: result.data.result[0].password
                }

                if(md5(password) == user.password) {
                    let userData = {
                        username: user.username,
                        token: GenerateSessionToken(user, config.jwtData.jwtSecret)
                    }

                    this.setAuthentication(true);
                    this.updateUser(userData);
                }
                else {
                    this.setAuthentication(false);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    updateUser = (user) => {
        this.setState({user});
    }

    setAuthentication = (auth) => {
        this.setState({isAuthenticated: auth});
    }

    state = {
        user: null,
        isAuthenticated: null,
        updateUser: this.updateUser,
        setAuthentication: this.setAuthentication,
        handleLogin: this.handeLogin
    }

    render() {
        return (
            <AuthContext.Provider value={this.state}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}