import './messageCard.css';
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import PropTypes from 'prop-types';

class MessageCard extends Component {
    render() {
        return (
            <div>
                <Card className={this.props.style}>
                    <CardHeader title={this.props.title} />
                    <CardContent>
                        {this.props.children}
                    </CardContent>
                </Card>
            </div>
        );
    }
}

MessageCard.propTypes = {
    title: PropTypes.string.isRequired,
    style: PropTypes.string
};

class SimpleMessageCard extends Component {
    render() {
        return (
            <Card className={this.props.style}>
                <CardContent>
                    {this.props.children}
                </CardContent>
            </Card>
        );
    }
}

SimpleMessageCard.propTypes = {
    style: PropTypes.string
};

class MessageCardWithActions extends Component {
    render() {
        return (
            <div>
                <Card className={this.props.style}>
                    <CardHeader title={this.props.title} />
                    <CardContent>
                        {this.props.children}
                    </CardContent>
                    <CardActions>
                        {this.props.actions}
                    </CardActions>
                </Card>
            </div>
        );
    }
}

MessageCardWithActions.propTypes = {
    title: PropTypes.string.isRequired,
    style: PropTypes.string,
    actions: PropTypes.element
};

export {
    MessageCard,
    SimpleMessageCard,
    MessageCardWithActions
}