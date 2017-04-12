/**
 * Created by zenmaster on 11/04/17.
 */
import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import { Tracker } from 'meteor/tracker';
import Signup from '../ui/Signup';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

const unauthenticatedpages = ['/', '/signup'];
const authenticatedpage = ['/link'];

const onEnterPublicPage = () => {
    if (Meteor.userId()) {
        browserHistory.replace("/link");
    }
};
const onEnterPrivatePage = () => {
    if (!Meteor.userId()) {
        browserHistory.replace("/");
    }
};

export const onAuthChange = (isAuthenticated) => {
    const pathname = browserHistory.getCurrentLocation.pathname;
    const isUnauthenticatedpage =  unauthenticatedpages.includes(browserHistory.getCurrentLocation().pathname);
    const isAuthenticatedpage =  authenticatedpage.includes(browserHistory.getCurrentLocation().pathname);

    if (isUnauthenticatedpage && isAuthenticated) {
        browserHistory.replace('/link');
    }
    else if (isAuthenticatedpage && !isAuthenticated) {
        browserHistory.replace('/');
    }
}

export const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Login} onEnter={onEnterPublicPage}/>
        <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
        <Route path="/link" component={Link} onEnter={onEnterPrivatePage}/>
        <Route path="*" component={NotFound} onEnter={onEnterPrivatePage}/>
    </Router>
);
