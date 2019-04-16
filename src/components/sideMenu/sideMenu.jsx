import './sideMenu.css'
import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from "@material-ui/core/Icon";

import { AuthConsumer } from '../authController/authController';

function ListItemLink(props) {
    return <ListItem button component={'a'} {...props}/>
}

export default class SideMenu extends Component {
    state = {
        open: this.props.open
    };

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.open !== this.state.open) {
            this.setState({open: nextProps.open});
        }
    }

    toggleDrawer = (open) => {
        this.setState({open: open});
    };

    render () {
        const { open } = this.state;

        return (
            <Drawer open={open} onClose={() => {this.toggleDrawer(false)}}>
                <div
                    tabIndex={0}
                    role={'button'}
                    onClick={() => {this.toggleDrawer(false)}}
                    onKeyDown={() => {this.toggleDrawer(false)}}>
                    <AuthConsumer>
                        {({isAuthenticated, handleLogout}) => (
                            <div>
                            {isAuthenticated ? (
                                <List subheader={<ListSubheader component="div">Hauptmenü</ListSubheader>}>
                                    <ListItemLink button href={'/'}>
                                        <Icon>home</Icon>
                                        <ListItemText primary={'Start'}/>
                                    </ListItemLink>
                                    <ListItemLink button href={'/records'}>
                                        <Icon>local_hospital</Icon>
                                        <ListItemText primary={'Krankenakten'}/>
                                    </ListItemLink>
                                    <ListItemLink button href={'/dashboard'}>
                                        <Icon>dashboard</Icon>
                                        <ListItemText primary={'Dashboard'}/>
                                    </ListItemLink>
                                    <ListItemLink button href={'/'} onClick={handleLogout}>
                                        <Icon>undo</Icon>
                                        <ListItemText primary={'Logout'}/>
                                    </ListItemLink>
                                </List>
                            ) : (
                                <List subheader={<ListSubheader component="div">Hauptmenü</ListSubheader>}>
                                    <ListItemLink button href={'/'}>
                                        <Icon>home</Icon>
                                        <ListItemText primary={'Start'}/>
                                    </ListItemLink>
                                    <ListItemLink button href={'/register'}>
                                        <Icon>person</Icon>
                                        <ListItemText primary={'Registrieren'}/>
                                    </ListItemLink>
                                    <ListItemLink button href={'/login'}>
                                        <Icon>redo</Icon>
                                        <ListItemText primary={'Login'}/>
                                    </ListItemLink>
                                </List>
                            )}
                            </div>
                        )}
                    </AuthConsumer>
                </div>
            </Drawer>
        );
    }
}

SideMenu.propTypes = {
    open: PropTypes.bool
};