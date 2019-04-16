import "@babel/polyfill";
import React, { Component, createContext } from 'react';
import md5 from 'md5';
import axios from 'axios';

import { GenerateSessionToken } from '../../utils/tokenGenerator';
import config from '../../../config/config';
import crypto from 'crypto';

const AuthContext = createContext({
    isAuthenticated: false
});

export const AuthConsumer = AuthContext.Consumer;

export default class AuthController extends Component {
    handleLogin = (username, password) => {
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
                    window.location = "/";
                }
                else {
                    this.setAuthentication(false);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleLogout = () => {
        localStorage.removeItem('uu');
        localStorage.removeItem('a');
        this.setState({user: {}});
        this.setState({isAuthenticated: false});
        window.location = "/";
    }

    updateUser = (user) => {
        this.setState({user});
    }

    setAuthentication = (auth) => {
        this.setState({isAuthenticated: auth});
    }

    encrypt = (itemName,payload) => {
        let val1 = crypto.randomBytes(16);
        let cipher = crypto.createCipheriv('aes-256-gcm', Buffer.from(config.cryptoData.secret), val1);
        let encrypted = cipher.update(payload, 'utf8');
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        
        let finished = {
            val1: val1.toString('hex'),
            val2: encrypted.toString('hex') 
        }

        localStorage.setItem(itemName, JSON.stringify(finished));
    }

    decrypt = (payload) => {
        let object = JSON.parse(payload);

        if(object !== null) {
            let val1 = Buffer.from(object.val1, 'hex');
            let val2 = Buffer.from(object.val2, 'hex');
            let decipher = crypto.createDecipheriv('aes-256-gcm', Buffer.from(config.cryptoData.secret), val1);
            let decrypted = decipher.update(val2, 'hex', 'utf8');
            return JSON.parse(decrypted);
        }
    }

    state = {
        user: {},
        isAuthenticated: false,
        updateUser: this.updateUser,
        setAuthentication: this.setAuthentication,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout
    }

    componentWillMount() {
        this.setState({user: this.decrypt(localStorage.getItem('uu'))});

        let isAuthenticated = this.decrypt(localStorage.getItem('a'));

        if(isAuthenticated === undefined) {
            isAuthenticated = false;
        }

        this.setState({isAuthenticated: isAuthenticated});
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.user !== prevState.user) {
            let user = {
                username: this.state.user.username,
                token: this.state.user.token
            }

            this.encrypt('uu',JSON.stringify(user));
        }
        
        if(this.state.isAuthenticated !== prevState.isAuthenticated) {
            this.encrypt('a',JSON.stringify(this.state.isAuthenticated));
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