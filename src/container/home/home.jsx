import './home.css'
import cms from '../../../config/cms';
import React, { Component } from 'react';
import TopMenu from "../../components/topMenu/topMenu";
import {MessageCard} from "../../components/messageCard/messageCard";
import Typography from '@material-ui/core/Typography';

import AuthProvider from '../../components/authController/authController';
export default class Home extends Component {
    render () {
        return (
            <div>
                <TopMenu title={'Home'}/>
                <AuthProvider>
                    <MessageCard title={cms.welcomeTitle} style={'defaultMessageCard'}>
                        <Typography variant={'body1'}>
                            {cms.welcome}
                        </Typography>
                    </MessageCard>
                </AuthProvider>
            </div>
        );
    }
}