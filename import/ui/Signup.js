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

        Accounts.createUser({email, password}, (err) => {
            console.log('Singup callback',err);
        });
        /*this.setState({
            error: 'Something went wrong'

        });*/

    }
    render() {

        return (
            <div>
                <h1> Join Us </h1>
                {this.state.error? <p>{this.state.error}</p>: undefined}
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="email" ref="email" name="email" placeholder="Email"/>
                    <input type="password" ref="password" name="passowrd" placeholder="Password"/>
                    <button>Create Account</button>

                </form>
                <Link to="/">Already have an account</Link>
            </div>
        );
    }
};
