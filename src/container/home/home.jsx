import './home.css'
import cms from '../../../config/cms';
import React, { Component } from 'react';
import TopMenu from "../../components/topMenu/topMenu";
import {MessageCard} from "../../components/messageCard/messageCard";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import AuthProvider from '../../components/authController/authController';
export default class Home extends Component {
    render () {
        return (
            <div>
                <TopMenu title={'Home'}/>
                <AuthProvider>
                    <Grid container className={'cardRoot'}>
                        <Grid item xs>
                            <Grid container direction={'row'} justify={'center'} alignItems={'center'}>
                                <Grid item>
                                    <MessageCard title={cms.welcomeTitle} style={'defaultMessageCard'}>
                                        <Typography variant={'body1'}>
                                            {cms.welcome}
                                        </Typography>
                                    </MessageCard>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </AuthProvider>
            </div>
        );
    }
}