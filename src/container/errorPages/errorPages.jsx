import './errorPages.css';
import React, { Component } from 'react';
import TopMenu from "../../components/topMenu/topMenu";
import { SimpleMessageCard } from "../../components/messageCard/messageCard";
import Typography from '@material-ui/core/Typography';

class PageNotFound extends Component {
    render() {
        return (
            <div>
                <TopMenu title={'Page Not Found'}/>
                <SimpleMessageCard style={'oneLineMessageCard pageNotFoundRoot'}>
                    <Typography variant={'display1'}>404 - Page not found</Typography>
                    <Typography variant={'body2'}>The page you are looking for is not existing.</Typography>
                    <Typography variant={'body2'}>Please use the main navigation or the following links.</Typography>
                    <Typography variant={'body1'}><a href="/">Home</a></Typography>
                </SimpleMessageCard>
            </div>
        )
    }
}

export {
    PageNotFound
}