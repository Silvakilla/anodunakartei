import './detailedRecord.css'
import cms from '../../../config/cms';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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

export default class DetailedRecord extends Component {
    state = {
        open: this.props.open,
        detailedRecord: {
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
        }
    };

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.open !== this.state.open) {
            this.setState({open: nextProps.open});
        }
    }

    handleClickClose = () => {
        this.setState({open:false})
    };

    render() {
        const {open,detailedRecord} = this.state;

        return (
            <Dialog open={open} onClose={this.handleClickClose} aria-labelledby="form-dialog-title" maxWidth={'lg'} fullWidth={true} scroll={'paper'}>
                <DialogTitle id="form-dialog-title">Krankenakte - {detailedRecord.firstName + ' ' + detailedRecord.lastName}</DialogTitle>
                <DialogContent>
                    <Typography variant={'h5'}>
                        Persönliche Daten
                    </Typography>
                    <TextField margin={'dense'} id={'firstName'} label={'Vorname'} type={'text'} value={detailedRecord.firstName}/>
                    <TextField margin={'dense'} id={'lastName'} label={'Nachname'} type={'text'} value={detailedRecord.lastName}/>
                    <TextField margin={'dense'} id={'age'} label={'Alter'} type={'text'} value={detailedRecord.age}/>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
                            <Typography variant={'h5'}>
                                Besonderheiten
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Beschreibung</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {detailedRecord.phobias.map((phobia,key) => (
                                        <TableRow key={key}>
                                            <TableCell>{phobia.name}</TableCell>
                                            <TableCell>{phobia.description}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel defaultExpanded>
                        <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
                            <Typography variant={'h5'}>
                                Verletzungen
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Datum</TableCell>
                                        <TableCell>Heiler</TableCell>
                                        <TableCell>Verletzung</TableCell>
                                        <TableCell>Ursache</TableCell>
                                        <TableCell>Behandlung</TableCell>
                                        <TableCell>Diensttauglich</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {detailedRecord.entries.map((entry,key) => (
                                        <TableRow key={key}>
                                            <TableCell>{entry.date}</TableCell>
                                            <TableCell>{entry.healer}</TableCell>
                                            <TableCell>{entry.injury}</TableCell>
                                            <TableCell>{entry.cause}</TableCell>
                                            <TableCell>{entry.treatment}</TableCell>
                                            <TableCell>{entry.fitForService}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClickClose} color={'primary'}>
                        Abbrechen
                    </Button>
                    <Button onClick={this.handleClickClose} color={'primary'}>
                        Speichern
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

DetailedRecord.propTypes = {
    open: PropTypes.bool.isRequired
};