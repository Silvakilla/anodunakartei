import './keepRecords.css'
import cms from '../../../config/cms';
import React, { Component } from 'react';
import TopMenu from "../../components/topMenu/topMenu";
import Grid from '@material-ui/core/Grid';
import KeepRecord from "../../components/keepRecord/keepRecord";
import _ from 'lodash';
import axios from 'axios';

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
        detailedRecords: [
            {
                id: 0,
                firstName: 'CharFirstName1',
                lastName: 'CharLastName1',
                age: 20,
                entries: [
                    {
                        id: 0,
                        date: '29.11.2018',
                        healer: 'Dr. Angstquell',
                        injury: 'Schwere Verbrennungen durch Fel-Feuer',
                        cause: 'Fel-Feuer',
                        treatment: 'Heilung durch Lichtmagie',
                        fitForService: 'Nein'
                    }
                ],
                phobias: [
                    {
                        id: 0,
                        name: 'Besonderheit 1',
                        description: 'Patient will nicht angefasst werden'
                    }
                ]
            },
            {
                id: 1,
                firstName: 'CharFirstName2',
                lastName: 'CharLastName2',
                age: 20,
                entries: [
                    {
                        id: 0,
                        date: '29.11.2018',
                        healer: 'Dr. Angstquell',
                        injury: 'Schwere Verbrennungen durch Fel-Feuer',
                        cause: 'Fel-Feuer',
                        treatment: 'Heilung durch Lichtmagie',
                        fitForService: 'Nein'
                    }
                ],
                phobias: [
                    {
                        id: 0,
                        name: 'Besonderheit 1',
                        description: 'Patient will nicht angefasst werden'
                    }
                ]
            },
            {
                id: 2,
                firstName: 'CharFirstName3',
                lastName: 'CharLastName3',
                age: 20,
                entries: [
                    {
                        id: 0,
                        date: '29.11.2018',
                        healer: 'Dr. Angstquell',
                        injury: 'Schwere Verbrennungen durch Fel-Feuer',
                        cause: 'Fel-Feuer',
                        treatment: 'Heilung durch Lichtmagie',
                        fitForService: 'Nein'
                    }
                ],
                phobias: [
                    {
                        id: 0,
                        name: 'Besonderheit 1',
                        description: 'Patient will nicht angefasst werden'
                    }
                ]
            },
            {
                id: 3,
                firstName: 'CharFirstName4',
                lastName: 'CharLastName4',
                age: 20,
                entries: [
                    {
                        id: 0,
                        date: '29.11.2018',
                        healer: 'Dr. Angstquell',
                        injury: 'Schwere Verbrennungen durch Fel-Feuer',
                        cause: 'Fel-Feuer',
                        treatment: 'Heilung durch Lichtmagie',
                        fitForService: 'Nein'
                    }
                ],
                phobias: [
                    {
                        id: 0,
                        name: 'Besonderheit 1',
                        description: 'Patient will nicht angefasst werden'
                    }
                ]
            }
        ]
    };

    deleteRecord = (id) => {
        delete this.state.records[id];
        this.setState({open:false});
    };

    getRecord = (id) => {
        axios.get('/record/{id}')
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render () {
        const {records,detailedRecords} = this.state;

        return (
            <div>
                <TopMenu title={cms.injuryRecords}/>
                <Grid container className={'cardRoot'}>
                    <Grid item xs={12}>
                        <Grid container spacing={16} direction={'row'} justify={'center'} alignItems={'center'}>
                            {records.map((mRecord,key) => ( //records evt begrenzen, dass nicht zuviele aufeinmal geladen werden
                                <Grid item key={key}>
                                    <KeepRecord 
                                        id={mRecord.id}
                                        characterName={mRecord.characterName}
                                        shortDescription={mRecord.shortDescription}
                                        deleteRecord={() => {this.deleteRecord(mRecord.id)}}
                                        detailedRecord={() => {this.getRecord(mRecord.id)}} // durch einen request ersetzen, der einen record holt anhand der ID
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
