import './login.css'
import React, { Component } from 'react';
import TopMenu from "../../components/topMenu/topMenu";
import LoginFields from "../../components/loginFields/loginFields";
import Grid from '@material-ui/core/Grid';

export default class Login extends Component {
    render() {
        return (
            <div>
                <TopMenu title={'Login'}/>
                <Grid container className={'cardRoot'}>
                    <Grid item xs>
                        <Grid container direction={'row'} justify={'center'} alignItems={'center'}>
                            <Grid item>
                                <LoginFields/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}