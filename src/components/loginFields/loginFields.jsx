import './loginFields.css';
import React, { Component } from 'react';
import {MessageCardWithActions} from "../messageCard/messageCard";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import md5 from 'md5';

import { GenerateSessionToken } from '../../utils/tokenGenerator';
import CheckToken from '../../utils/tokenChecker';
import config from '../../../config/config';
import Auth from '../../components/authController/authController';

export default class LoginFields extends Component {
    state = {
        user: {
            username: '',
            password: ''
        }
    };

    handleChange = (event) => {
        event.preventDefault();
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({user});
    };

    handleLogin = () => {
        let payload = {
            username: this.state.user.username,
            password: md5(this.state.user.password)
        };

        GenerateSessionToken(payload, config.jwtData.jwtSecret);

        if(CheckToken(localStorage.getItem('session'),config.jwtData.jwtSecret)) {
            localStorage.setItem('auth','true');
        }
        else {
            // do something do show user, error did happen
        }
    };

    render() {
        let cardActions = (
            <Button variant={'contained'} color={'inherit'} onClick={this.handleLogin} href={'/'}>
                <Typography variant={'button'}>
                    Login
                </Typography>
            </Button>
        );

        return (
            <MessageCardWithActions title={'Login'} style={'defaultMessageCard'} actions={cardActions}>
                <TextField
                    name={'username'}
                    label={'Username'}
                    value={this.state.user.username}
                    onChange={this.handleChange}
                    margin={'normal'}
                    fullWidth
                />
                <TextField
                    name={'password'}
                    label={'Passwort'}
                    value={this.state.user.password}
                    onChange={this.handleChange}
                    margin={'normal'}
                    type={'password'}
                    fullWidth
                />
            </MessageCardWithActions>
        );
    }
}