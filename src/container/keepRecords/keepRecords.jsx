import './keepRecords.css'
import cms from '../../../config/cms';
import React, { Component } from 'react';
import TopMenu from "../../components/topMenu/topMenu";
import Grid from '@material-ui/core/Grid';
import KeepRecord from "../../components/keepRecord/keepRecord";
import _ from 'lodash';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DetailedRecord from "../../components/detailedRecord/detailedRecord";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import Icon from '@material-ui/core/Icon';

export default class KeepRecords extends Component {
    state = {
        records: [
            {
                id: 0,
                characterName: 'Charname1',
                shortDescription: 'Eventuell ein kurzer Text'
            },
            {
                id: 1,
                characterName: 'Charname2',
                shortDescription: 'Eventuell ein kurzer Text'
            },
            {
                id: 2,
                characterName: 'Charname3',
                shortDescription: 'Eventuell ein kurzer Text'
            },
            {
                id: 3,
                characterName: 'Charname4',
                shortDescription: 'Eventuell ein kurzer Text'
            }
        ],
        open: false
    };

    deleteRecord = (id) => {
        delete this.state.records[id];
        console.log(this.state.records);
        this.setState({open:false});
    };

    /*
    Dialog wird geöffnet, ID wird übergeben und alle infos aus der DB für die ID gezogen
     */
    handleClickOpen = () => {
        this.setState({open:true});
    };

    render () {
        const {records,open} = this.state;

        return (
            <div>
                <TopMenu title={'Krankenakten'}/>
                <Grid container className={'cardRoot'}>
                    <Grid item xs={12}>
                        <Grid container spacing={16} direction={'row'} justify={'center'} alignItems={'center'}>
                            {records.map((mRecord,key) => (
                                <Grid item key={key}>
                                    <KeepRecord id={mRecord.id} characterName={mRecord.characterName} shortDescription={mRecord.shortDescription} openRecord={this.handleClickOpen} deleteRecord={() => {this.deleteRecord(mRecord.id)}}/>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
                <DetailedRecord open={open}/>
            </div>
        );
    }
}


/*
{records.map((mRecord,key) => (
                                <Grid item key={key}>
                                    <KeepRecord id={mRecord.id} characterName={mRecord.characterName} shortDescription={mRecord.shortDescription} openRecord={this.handleClickOpen} deleteRecord={() => {this.deleteRecord(mRecord.id)}}/>
                                </Grid>
                            ))
 */