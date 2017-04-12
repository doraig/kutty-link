import { Meteor } from 'meteor/meteor';
import '../import/api/users';
import '../import/api/links';


Meteor.startup(() => {
    Meteor.call('greetUser', (err, res) =>{
        console.log('Arguments', err, res);
    });

});

