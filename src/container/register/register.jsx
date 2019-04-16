import React, { Component } from 'react';

import TopMenu from "../../components/topMenu/topMenu";
import RegisterFields from "../../components/registerFields/registerFields";
import Grid from '@material-ui/core/Grid';

export default class Register extends Component {
    render () {
        return (
            <div>
                <TopMenu title={'Register'}/>
                <Grid container className={'cardRoot'}>
                    <Grid item xs>
                        <Grid container direction={'row'} justify={'center'} alignItems={'center'}>
                            <Grid item>
                                <RegisterFields/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }

}