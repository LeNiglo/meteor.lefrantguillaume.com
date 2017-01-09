import { Email } from 'meteor/email';
import { check } from 'meteor/check';

Meteor.methods({
	sendEmail: function (obj) {
		check([obj.from.name, obj.from.email, obj.content], [String]);
		this.unblock();
		Email.send({
			from: obj.from.name + " <" + obj.from.email + ">",
			to: process.env.MAIL_TO,
			subject: "Säplltxe from " + obj.from.name,
			text: obj.content,
		});
	}
})
