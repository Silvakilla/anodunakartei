import React, { Component } from 'react';
import TopMenu from "../../components/topMenu/topMenu";

/*
    Bestimmte Einstellungen für den Account ändern
    Email
    CharName
    Passwort
*/

export default class Account extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <TopMenu title={'Account'}/>
                Account
            </div>
        );
    }
}