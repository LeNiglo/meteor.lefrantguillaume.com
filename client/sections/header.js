import { Tracker } from 'meteor/tracker';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { TAPi18n } from 'meteor/tap:i18n';

Template.header.rendered = () => {
	// WOW
	Tracker.autorun(() => {
		if (WOW) {
			new WOW().init()
		}
	});

	// particlesJS
	Tracker.autorun(() => {
		if (particlesJS) {
			particlesJS.load('particles-js', 'pjs-settings.json');
		}
	});

	// smoothScroll
	Tracker.autorun(() => {
		if (smoothScroll) {
			smoothScroll.init({
				updateURL: false,
				offset: 50
			});
		}
	});
};

Template.update_lang.created = () => {
	var tpl = Template.instance();
	Tracker.autorun(() => {
		tpl.supportedLangs = Object.keys(TAPi18n.getLanguages());
	});
};

Template.update_lang.events({
	'click .update-lang': (event, tpl) => {
		event.preventDefault();
		var requestedLang = $(event.target).data('lang');
		if ($.inArray(requestedLang, tpl.supportedLangs) >= 0) {
			Session.set('userLanguage', requestedLang);
		}
	}
})
