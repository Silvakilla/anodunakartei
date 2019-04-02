import "@babel/polyfill";
import React, { Component, createContext } from 'react';

const AuthContext = createContext({
    user: null,
    isAuthenticated: false
})

export const AuthConsumer = AuthContext.Consumer;

export default class AuthController extends Component {
    state = {
        user: null,
        isAuthenticated: null
    }

    componentDidUpdate() {
        this.checkAuth();
    }

    componentDidMount() {
        this.checkAuth();
    }

    async checkAuth() {
        const isAuthenticated = await this.props.isAuthenticated;
        if(isAuthenticated !== this.state.isAuthenticated) {
            const user = await this.props.user;
            this.setState({isAuthenticated, user});
        }
    }

    render() {
        return (
            <AuthContext.Provider value={this.state}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}