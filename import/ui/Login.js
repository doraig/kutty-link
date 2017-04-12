/**
 * Created by ezaiuud on 4/10/2017.
 */
import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';


export default class Login extends React.Component {

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


        Meteor.loginWithPassword({email}, password, (err) => {
            if (err) {
                this.setState({error: 'Invalid Login. Please check your data'});
            }
            else {
                this.setState({error: ''});
            }
        })

    }
    render() {
        return (
                <div>
                    <h1>Login to Kutty Link</h1>
                    {this.state.error? <p>{this.state.error}</p>: undefined}
                    <form onSubmit={this.onSubmit.bind(this)} noValidate>
                        <input type="email" ref="email" name="email" placeholder="Email"/>
                        <input type="password" ref="password" name="passowrd" placeholder="Password"/>
                        <button>Login Form Here.</button>

                    </form>

                    <Link to="/signup">Have an account?</Link>
                </div>
            )

    }
};
