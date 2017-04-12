/**
 * Created by ezaiuud on 4/10/2017.
 */

import React from 'react';
import { browserHistory } from 'react-router'
import { Accounts } from 'meteor/accounts-base';
export default class Link extends React.Component {

    logout(event) {
        Accounts.logout();
    }
    render() {
        return (
            <div>
            <p>Link component here</p>
            <button onClick={this.logout.bind(this)}>Logout</button>
            </div>
        );
    }
};
