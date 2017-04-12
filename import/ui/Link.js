/**
 * Created by ezaiuud on 4/10/2017.
 */

import {Meteor} from 'meteor/meteor';
import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Links } from '../api/links';

import LinksList from './LinksList';

export default class Link extends React.Component {

    logout(event) {
        Accounts.logout();
    }
    onSubmit(event) {
        const url = this.refs.url.value.trim();
        event.preventDefault();

        if (url) {
            Links.insert ({url, userId: Meteor.userId()});
            this.refs.url.value = '';
        }
    }
    render() {
        return (
            <div>
            <p>Your Links</p>
            <button onClick={this.logout.bind(this)}>Logout</button>
            <LinksList/>
            <p>Add Link</p>
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type="text" ref="url" placeholder='URL'/>
                <button>Add Link</button>
            </form>
            </div>
        );
    }
};
