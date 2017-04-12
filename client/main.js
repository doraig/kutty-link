import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';

import {routes, onAuthChange} from  '../import/routes/route'

Tracker.autorun( () => {
    onAuthChange(!!Meteor.userId());

});
Meteor.startup(() => {
    ReactDOM.render(routes,document.getElementById("app"));
});