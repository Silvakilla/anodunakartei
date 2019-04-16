import React, { Component } from 'react';
import TopMenu from "../../components/topMenu/topMenu";

/*
    Krankenakten hinzufügen/editieren/löschen
    Militärakten hinzufügen/editieren/löschen
    Rechte einstellen
    User bearbeiten/löschen
    Tools
        Excel Importer
    Statistik
*/

export default class Dashboard extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <TopMenu title={'Dashboard'}/>
                Dashboard
            </div>
        );
    }
}