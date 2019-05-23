import React, { Component } from 'react';
import TopMenu from "../../components/topMenu/topMenu";
import EditAccount from '../../components/editAccount/editAccount';
import axios from 'axios';
import _ from 'lodash';

/*
    Übergabe vom username verbessern
*/

export default class Account extends Component {
    componentWillMount() {
        axios.get('/api/getAccountData/' + localStorage.getItem('username'), {timeout: 2500})
            .then((result) => {
                localStorage.removeItem('username');
                
                let accountData = {
                    username: result.data.result[0].username,
                    email: result.data.result[0].email,
                    password: ''
                }

                let firstName = _.split(result.data.result[0].characterName)[0];
                let lastName = _.split(result.data.result[0].characterName)[1];

                if(lastName === undefined) {
                    lastName = '';
                }

                let profileData = {
                    profilePicture: '',
                    firstName: firstName,
                    lastName: lastName
                }

                localStorage.setItem('accountData',JSON.stringify(accountData));
                localStorage.setItem('profileData',JSON.stringify(profileData));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.user !== prevState.user) {
            
        }
    }

    render() {
        return (
            <div>
                <TopMenu title={'Mein Account'}/>
                <EditAccount/>
            </div>
        );
    }
}