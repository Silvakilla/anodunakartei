import './loginFields.css';
import React, { Component } from 'react';
import {MessageCardWithActions} from "../messageCard/messageCard";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';


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
        localStorage.setItem('auth','true');
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
                    label={'Password'}
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