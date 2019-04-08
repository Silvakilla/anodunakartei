import './keepRecord.css'
import cms from '../../../config/cms';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import _ from 'lodash';

import DetailedRecord from "../../components/detailedRecord/detailedRecord";

export default class KeepRecord extends Component {
    state = {
        open: false,
        charData: {},
        entries: [],
        phobias: []
    }

    handleClickOpen = () => {
        this.setState({open:true});
        this.getDetailedRecord(this.props.id);
        this.getDetailedEntry(this.props.id);
        this.getDetailedPhobia(this.props.id);
    };

    getDetailedRecord = (id) => {
        let characterData = {};

        axios.get('/api/getDetailedRecord/' + id)
        .then((response) => {
            characterData.id = id;
            characterData.firstName = response.data.rows[0].firstName;
            characterData.lastName = response.data.rows[0].lastName;
            characterData.age = response.data.rows[0].age;
            this.setState({charData: characterData});
        })
        .catch((error) => {
            console.log(error);
        });   
    }

    getDetailedEntry = (id) => {
        let entryArray = this.state.entries;
        let entry = {}

        axios.get('/api/getRecordEntry/'+id)
        .then((response) => {
            _.forEach(response.data.rows, (value,key) => {
                entry.date = value.date;
                entry.healer = value.healer;
                entry.injury = value.injury;
                entry.cause = value.cause;
                entry.treatment = value.treatment;
                entry.fitForService = value.fitForService;
                
                entryArray.push(entry);
            });

            this.setState({entries: entryArray});
        }).catch((error) => {
            console.log(error)
        });
    }

    getDetailedPhobia = (id) => {
        let phobiaArray = this.state.phobias;
        let phobia = {};

        axios.get('/api/getPhobia/'+id)
        .then((response) => {
            _.forEach(response.data.rows, (value,key) => {
                phobia.name = value.name;
                phobia.description = value.description;

                phobiaArray.push(phobia);
            });

            this.setState({phobias: phobiaArray});
        })
        .catch((error) => {
            console.log(error);
        });   
    }

    render(){
        const {open,charData,entries,phobias} = this.state;
        const {characterName,shortDescription,deleteRecord,id} = this.props;

        return (
            <div>
                <Card className={'recordItem'}>
                    <CardContent>
                        <Typography gutterBottom variant={'h5'} component={'h2'}>
                            {characterName}
                        </Typography>
                        <Typography component={'p'}>
                            {shortDescription}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size={'small'} color={'primary'} onClick={this.handleClickOpen}>
                            {cms.open}
                        </Button>
                        <Button size={'small'} color={'primary'} onClick={() => {deleteRecord(id)}}>
                            {cms.delete}
                        </Button>
                    </CardActions>
                </Card>
                <DetailedRecord open={open} charData={charData} entries={entries} phobias={phobias}/>
            </div>
        );
    }
}

KeepRecord.propTypes = {
    id: PropTypes.number.isRequired,
    characterName: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    deleteRecord: PropTypes.func.isRequired
};