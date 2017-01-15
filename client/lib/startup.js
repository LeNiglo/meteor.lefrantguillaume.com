import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';
import { TAPi18n } from 'meteor/tap:i18n';

Meteor.startup(function () {
	Session.setDefault('userLanguage', 'fr');

	Tracker.autorun(() => {
		if (TAPi18n) {
			TAPi18n.setLanguage(Session.get('userLanguage'))
			.fail(function (error_message) {
				console.error(error_message);
			});
		}
	});

	Tracker.autorun(() => {
		$('html').attr('lang', Session.get('userLanguage'));
	});
});
