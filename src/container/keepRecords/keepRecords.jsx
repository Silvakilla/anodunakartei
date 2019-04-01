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
        dRecord : 
        {
            id: 0,
            firstName: '',
            lastName: '',
            age: 0,
            entries: [],
            phobias: []
        },
        records: [],
        detailedRecords: [
            {
                id: 1,
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
                id: 2,
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
                id: 3,
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
                id: 4,
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

    componentDidMount() {
        axios.get('/api/getShortRecords')
        .then((response) => {
            this.setState({records: response.data.rows});
        })
        .catch((error) => {
            console.log(error);
        });
    }

    deleteRecord = (id) => {
        delete this.state.records[id];
        this.setState({open:false});
    };

    render () {
        const {records} = this.state;

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
                                        characterName={mRecord.firstName + " " + mRecord.lastName}
                                        shortDescription={mRecord.description}
                                        deleteRecord={() => {this.deleteRecord(mRecord.id)}}
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
