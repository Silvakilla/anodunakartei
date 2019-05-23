import './editAccount.css';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from  '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {MessageCard} from "../messageCard/messageCard";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Icon from '@material-ui/core/Icon';
import iconNames from '../../../config/materialIcons';
import PropTypes from 'prop-types';
import axios from 'axios';

const styles = theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
});

/*
    Übergabe vom daten verbessern
*/

class EditAccount extends Component {
    state = {
        expanded: null,
        accountData: {},
        profileData: {}
    }

    componentWillMount() {
        this.setState({accountData:JSON.parse(localStorage.getItem('accountData'))});
        this.setState({profileData:JSON.parse(localStorage.getItem('profileData'))});
        localStorage.removeItem('accountData');
        localStorage.removeItem('profileData');
    }

    handleUserChange = (event) => {
        event.preventDefault();
        const field = event.target.name;
        const accountData = this.state.accountData;
        accountData[field] = event.target.value;
        this.setState({accountData});
    };

    handleProfileChange = (event) => {
        event.preventDefault();
        const field = event.target.name;
        const profileData = this.state.profileData;
        profileData[field] = event.target.value;
        this.setState({profileData});
    };

    handlePanelChange = panel => (event, expanded) => {
        this.setState({
          expanded: expanded ? panel : false,
        });
    };

    saveAccountData = (username) => {
        axios.patch('/api/updateAccountData/' + username, {timeout: 2500})
            .then((result) => {
                console.log(result);
            })
            .catch((error) => { 
                console.log(error) 
            });
    };

    saveProfileData = () => {

    };

    render() {
        const { classes } = this.props;
        const { expanded, accountData, profileData } = this.state;

        return (
            <div>
                <MessageCard title={''} style={'defaultMessageCard'}>
                    <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handlePanelChange('panel1')}>
                        <ExpansionPanelSummary expandIcon={<Icon>{iconNames.expand_more}</Icon>}>
                            <Typography className={classes.heading}>Account-Daten</Typography>
                            <Typography className={classes.secondaryHeading}>Hier findet ihr eure Daten zu eurem Account</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Grid container spacing={24}>
                                <Grid item xs={4}>
                                    <TextField
                                        name={'username'}
                                        label={'Username'}
                                        value={accountData.username.trim()}
                                        onChange={this.handleUserChange}
                                        margin={'normal'}
                                        disabled={true}
                                        className={'textFieldName'}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Hier steht der Nutzername mit dem ihr euch anmeldet. (Nur im Dashboard änderbar)
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button variant={'contained'} color={'inherit'} onClick={() => {this.saveAccountData(accountData.username)}}>
                                        <Typography variant={'button'}>
                                            Speichern
                                        </Typography>
                                    </Button>
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        name={'email'}
                                        label={'Email'}
                                        value={accountData.email.trim()}
                                        onChange={this.handleUserChange}
                                        margin={'normal'}
                                        disabled={false}
                                        className={'textFieldName'}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Hier steht die Email die verwendet wird, um etwaige Informationen zu verschicken.
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button variant={'contained'} color={'inherit'} onClick={() => {this.saveAccountData(accountData.username)}}>
                                        <Typography variant={'button'}>
                                            Speichern
                                        </Typography>
                                    </Button>
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        name={'password'}
                                        label={'Passwort'}
                                        value={accountData.password.trim()}
                                        onChange={this.handleUserChange}
                                        margin={'normal'}
                                        disabled={false}
                                        className={'textFieldName'}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Hier könnt ihr euer Passwort neu setzen.
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button variant={'contained'} color={'inherit'} onClick={() => {this.saveAccountData(accountData.username)}}>
                                        <Typography variant={'button'}>
                                            Speichern
                                        </Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handlePanelChange('panel2')}>
                        <ExpansionPanelSummary expandIcon={<Icon>{iconNames.expand_more}</Icon>}>
                            <Typography className={classes.heading}>Profil-Daten</Typography>
                            <Typography className={classes.secondaryHeading}>Hier findet ihr eure Daten zu eurem Profil</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Grid container spacing={24}>
                                <Grid item xs={4}>
                                    <TextField
                                        name={'profilePicture'}
                                        label={'Profilbild'}
                                        value={profileData.profilePicture.trim()}
                                        onChange={this.handleProfileChange}
                                        margin={'normal'}
                                        disabled={false}
                                        className={'textFieldName'}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Hier könnt ihr eine URL für euer Profilbild setzen.
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button variant={'contained'} color={'inherit'} onClick={() => {this.saveProfileData}}>
                                        <Typography variant={'button'}>
                                            Speichern
                                        </Typography>
                                    </Button>
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        name={'firstName'}
                                        label={'Vorname'}
                                        value={profileData.firstName.trim()}
                                        onChange={this.handleProfileChange}
                                        margin={'normal'}
                                        disabled={false}
                                        className={'textFieldName'}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Hier könnt ihr den Vornamen eures Charakters anpassen.
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button variant={'contained'} color={'inherit'} onClick={() => {this.saveProfileData}}>
                                        <Typography variant={'button'}>
                                            Speichern
                                        </Typography>
                                    </Button>
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        name={'lastName'}
                                        label={'Nachname'}
                                        value={profileData.lastName.trim()}
                                        onChange={this.handleProfileChange}
                                        margin={'normal'}
                                        disabled={false}
                                        className={'textFieldName'}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Hier könnt ihr den Nachnamen eures Charakters anpassen.
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button variant={'contained'} color={'inherit'} onClick={() => {this.saveProfileData}}>
                                        <Typography variant={'button'}>
                                            Speichern
                                        </Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </MessageCard>
            </div>
        );
    }
}

EditAccount.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EditAccount);