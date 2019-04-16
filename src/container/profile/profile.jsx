import React, { Component } from 'react';
import TopMenu from "../../components/topMenu/topMenu";

/*
    Schnellauswahl und übersicht vom Profil
    Krankenakte 
    Militärakte
    Profilbild
*/

export default class Profile extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <TopMenu title={'Profile'}/>
                Profile
            </div>
        );
    }
}