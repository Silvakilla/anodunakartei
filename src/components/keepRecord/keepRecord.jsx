import './keepRecord.css'
import cms from '../../../config/cms';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class KeepRecord extends Component {
    render(){
        return (
            <Card className={'recordItem'}>
                <CardContent>
                    <Typography gutterBottom variant={'h5'} component={'h2'}>
                        {this.props.characterName}
                    </Typography>
                    <Typography component={'p'}>
                        {this.props.shortDescription}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size={'small'} color={'primary'} onClick={this.props.openRecord}>
                        Öffnen
                    </Button>
                    <Button size={'small'} color={'primary'} onClick={() => {this.props.deleteRecord(this.props.id)}}>
                        Löschen
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

KeepRecord.propTypes = {
    id: PropTypes.number.isRequired,
    characterName: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    openRecord: PropTypes.func.isRequired,
    deleteRecord: PropTypes.func.isRequired
};