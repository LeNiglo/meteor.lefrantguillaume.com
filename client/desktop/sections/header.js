import { Tracker } from 'meteor/tracker';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

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
			// TODO add navbar offset
			smoothScroll.init({
				updateURL: false
			});
		}
	});
};

Template.header.events({
	'click .update-lang': (event) => {
		event.preventDefault();
		var lang = $(event.target).data('lang');
		// TODO check that lang is in ['fr', 'en']
		Session.set('userLanguage', lang);
	}
})
