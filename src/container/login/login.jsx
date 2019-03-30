import './login.css'
import React, { Component } from 'react';
import TopMenu from "../../components/topMenu/topMenu";
import LoginFields from "../../components/loginFields/loginFields";

export default class Login extends Component {
    render() {
        return (
            <div>
                <TopMenu title={'Login'}/>
                <LoginFields/>
            </div>
        );
    }
}