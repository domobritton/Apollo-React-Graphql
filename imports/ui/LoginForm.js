import React, { Component } from 'react'
import { Accounts } from 'meteor/accounts-base';

// login existing user
export default class RegisterForm extends Component {

    login = e => {
        e.preventDefault();
        Meteor.loginWithPassword(this.email.value, this.password.value,
            error => {
                console.log(error);
            });
    }

    render() {
        return (
        <form onSubmit={this.login}>
            <input 
            type='email'
            ref={(input) => (this.email = input)} />
            <input 
            type='password'
            ref={(input) => (this.password = input)} />
            <button type='submit'>Login User</button>
        </form>
        )
    }
}
