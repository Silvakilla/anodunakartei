import React, { Component } from 'react';

import TopMenu from "../../components/topMenu/topMenu";
import RegisterFields from "../../components/registerFields/registerFields";

export default class Register extends Component {
    render () {
        return (
            <div>
                <TopMenu title={'Register'}/>
                <RegisterFields/>
            </div>
        );
    }

}