import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import Signup from './../import/ui/Signup';
import Link from './../import/ui/Link';
import NotFound from './../import/ui/NotFound';
import Login from './../import/ui/Login';

window.browserHistory = browserHistory;
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/link" component={Link}/>
    <Route path="*" component={NotFound}/>
  </Router>
);

Meteor.startup(() => {
    ReactDOM.render(routes,document.getElementById("app"));
});