import { Template } from 'meteor/templating';

import './main.html';

Template.registerHelper('and', (a, b) => {
	return a && b;
});

Template.registerHelper('or', (a, b) => {
	return a || b;
});
