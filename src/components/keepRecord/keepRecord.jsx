import './keepRecord.css'
import cms from '../../../config/cms';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import DetailedRecord from "../../components/detailedRecord/detailedRecord";

export default class KeepRecord extends Component {
    state = {
        open: false,
    }

    handleClickOpen = () => {
        this.setState({open:true});
    };

    render(){
        const {open} = this.state;
        const {characterName,shortDescription,deleteRecord,id,detailedRecord} = this.props;

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
                <DetailedRecord open={open} detailedRecord={detailedRecord}/>
            </div>
        );
    }
}

KeepRecord.propTypes = {
    id: PropTypes.number.isRequired,
    characterName: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    deleteRecord: PropTypes.func.isRequired,
    detailedRecord: PropTypes.object.isRequired
};