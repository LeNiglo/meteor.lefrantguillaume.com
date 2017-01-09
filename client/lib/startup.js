import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';

Meteor.startup(function () {
	Session.set('showLoadingIndicator', true);
	Session.setDefault('userLanguage', 'fr');

	Tracker.autorun(() => {
		if (TAPi18n) {
			TAPi18n.setLanguage(Session.get('userLanguage'))
			.done(function () {
				Session.set('showLoadingIndicator', false);
			})
			.fail(function (error_message) {
				console.error(error_message);
			});
		}
	});

	Tracker.autorun(() => {
		$('html').attr('lang', Session.get('userLanguage'));
	});
});
