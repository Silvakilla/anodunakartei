import './detailedRecord.css'
import cms from '../../../config/cms';
import iconNames from '../../../config/materialIcons';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
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
        open: this.props.open
    };

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.open !== this.state.open) {
            this.setState({open: nextProps.open});
        }
    }

    handleClickClose = () => {
        this.setState({open:false})
    };

    // axios call zum saven vom jetztigen Record
    handleSave = () => {
        this.setState({open:false})
    };

    render() {
        const {open,} = this.state;
        const {charData,entries,phobias} = this.props;
        
        return (
            <Dialog open={open} onClose={this.handleClickClose} aria-labelledby="form-dialog-title" maxWidth={'lg'} fullWidth={true} scroll={'paper'}>
                <DialogTitle id="form-dialog-title">{cms.injuryRecord} - {charData.firstName + ' ' + charData.lastName}</DialogTitle>
                <DialogContent>
                    <Typography variant={'h5'}>
                        {cms.personalData}
                    </Typography>
                    <TextField margin={'dense'} id={'firstName'} label={cms.firstName} type={'text'} value={charData.firstName || ''}/>
                    <TextField margin={'dense'} id={'lastName'} label={cms.lastName} type={'text'} value={charData.lastName || ''}/>
                    <TextField margin={'dense'} id={'age'} label={cms.age} type={'text'} value={charData.age || ''}/>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<Icon>{iconNames.expand_more}</Icon>}>
                            <Typography variant={'h5'}>
                                {cms.phobias}
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>{cms.name}</TableCell>
                                        <TableCell>{cms.description}</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {phobias.map((phobia,key) => (
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
                        <ExpansionPanelSummary expandIcon={<Icon>{iconNames.expand_more}</Icon>}>
                            <Typography variant={'h5'}>
                                {cms.injuries}
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>{cms.date}</TableCell>
                                        <TableCell>{cms.healer}</TableCell>
                                        <TableCell>{cms.injury}</TableCell>
                                        <TableCell>{cms.cause}</TableCell>
                                        <TableCell>{cms.treatment}</TableCell>
                                        <TableCell>{cms.fitForService}</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {entries.map((entry,key) => (
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
                        {cms.cancel}
                    </Button>
                    <Button onClick={this.handleSave} color={'primary'}>
                        {cms.save}
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

DetailedRecord.propTypes = {
    open: PropTypes.bool.isRequired,
    charData: PropTypes.any,
    entries: PropTypes.any,
    phobias: PropTypes.any
};