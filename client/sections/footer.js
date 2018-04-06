import { Tracker } from 'meteor/tracker';
import  { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var'

Template.footer.created = () => {
	var tpl = Template.instance();
	tpl.availibility = new ReactiveVar(true);
	$.getJSON("/me.json", (data) => {
		tpl.availibility.set(data.availibility);
	});
}

Template.footer.rendered = () => {
	var tpl = Template.instance();
	Tracker.autorun(() => {
		tpl.availibility.get();
		window.setTimeout(() => {
			$('*[data-toggle="tooltip"]').tooltip({
				delay: 150
			});
		}, 500);
	});
};

Template.footer.helpers({
	getAvailability: () => {
		return Template.instance().availibility.get();
	}
});
