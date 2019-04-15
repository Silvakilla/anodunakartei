import "@babel/polyfill";
import React, { Component, createContext } from 'react';
import md5 from 'md5';
import axios from 'axios';

import { GenerateSessionToken } from '../../utils/tokenGenerator';
import config from '../../../config/config';

const AuthContext = createContext({});

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
        user: localStorage.getItem('u'),
        isAuthenticated: localStorage.getItem('a'),
        updateUser: this.updateUser,
        setAuthentication: this.setAuthentication,
        handleLogin: this.handeLogin
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.user !== prevState.user) {
            localStorage.setItem("u", {username: this.state.user.username, token: this.state.user.token});
        } 
        else if(this.state.isAuthenticated !== prevState.isAuthenticated) {
            localStorage.setItem("a", this.state.isAuthenticated);
        }
    }

    render() {
        return (
            <AuthContext.Provider value={this.state}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}