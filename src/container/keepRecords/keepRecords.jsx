import './keepRecords.css'
import cms from '../../../config/cms';
import React, { Component } from 'react';
import TopMenu from "../../components/topMenu/topMenu";
import Grid from '@material-ui/core/Grid';
import KeepRecord from "../../components/keepRecord/keepRecord";

export default class KeepRecords extends Component {
    render() {
        return (
            <div>
                <TopMenu title={'Keep Records'}/>
                <Grid container className={'root'}>
                    <Grid item xs={12}>
                        <Grid container spacing={16} direction={'row'} justify={'center'} alignItems={'center'}>
                            <Grid item>
                                <KeepRecord/>
                            </Grid>
                            <Grid item>
                                <KeepRecord/>
                            </Grid>
                            <Grid item>
                                <KeepRecord/>
                            </Grid>
                            <Grid item>
                                <KeepRecord/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}