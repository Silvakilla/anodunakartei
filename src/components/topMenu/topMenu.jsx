import './topMenu.css';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const styles = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class TopMenu extends Component {
    state = {
        auth: localStorage.getItem('auth'),
        anchorEl: null
    };

    handleLogout = () => {
        this.setState({auth: 'false'});
        localStorage.setItem('auth','false');
        this.setState({ anchorEl: null});
    };

    handleMenu = (event) => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({ anchorEl: null});
    };

    render() {
        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={'root'}>
                <AppBar position={'static'}>
                    <Toolbar color={'secondary'}>
                        <IconButton className={classes.menuButton} color={'inherit'} aria-label='Menu'>
                            <Icon>menu</Icon>
                        </IconButton>
                        <Typography variant={'h6'} color={'inherit'} className={classes.grow}>
                            {this.props.title}
                        </Typography>
                        {auth !== 'false' ? (
                            <div>
                                <IconButton
                                    aria-owns={open ? 'menu-appbar' : undefined}
                                    aria-haspopup={'true'}
                                    onClick={this.handleMenu}
                                    color={'inherit'}
                                >
                                    <Icon>account_circle</Icon>
                                </IconButton>
                                <Menu
                                    id={'menu-appbar'}
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={this.handleClose}>My Account</MenuItem>
                                    <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                                </Menu>
                            </div>
                        ) : <div>
                            <Button variant={'contained'} color={'primary'} href={'/login'}>
                                <Typography variant={'button'} color={'inherit'} className={'whiteText'}>Login</Typography>
                            </Button>
                        </div>}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

TopMenu.propTypes = {
    title: PropTypes.string.isRequired
};

export default withStyles(styles)(TopMenu);