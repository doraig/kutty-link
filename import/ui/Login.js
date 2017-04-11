/**
 * Created by ezaiuud on 4/10/2017.
 */
import React from 'react';
import { Link } from 'react-router';


export default class Login extends React.Component {
    render() {
        return (
                <div>
                    <h1>Login to Kutty Link</h1>


                    Login Form Here.

                    <Link to="/signup">Have an account?</Link>
                </div>
            )

    }
};
