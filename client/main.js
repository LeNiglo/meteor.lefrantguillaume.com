import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './main.html';

Template.registerHelper('and', (a, b) => {
	return a && b;
});

Template.registerHelper('or', (a, b) => {
	return a || b;
});
