/**
 * Created by ezaiuud on 4/10/2017.
 */
import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
export default class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
    }
    onSubmit(event) {
        event.preventDefault();
        let email = this.refs.email.value.trim();
        let password = this.refs.password.value;
        if (password.length < 9) {
            return this.setState({error: "The password must be more that 9 character."});
        }
        Accounts.createUser({email, password}, (err) => {
            if (err) {
                this.setState({error: err.reason});
            } else {
                this.setState({error: ''});
            }

        });

    }
    render() {

        return (
            <div>
                <h1> Join Us </h1>
                {this.state.error? <p>{this.state.error}</p>: undefined}
                <form onSubmit={this.onSubmit.bind(this)} noValidate>
                    <input type="email" ref="email" name="email" placeholder="Email"/>
                    <input type="password" ref="password" name="passowrd" placeholder="Password"/>
                    <button>Create Account</button>

                </form>
                <Link to="/">Already have an account</Link>
            </div>
        );
    }
};
