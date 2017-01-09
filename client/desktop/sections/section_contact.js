import { Template } from 'meteor/templating';

Template.section_contact.events({
	'submit form#form-contact': (event) => {
		event.preventDefault();
		var $this = $(event.target);
		var $submitButton = $this.find('button[type="submit"]').first();
		var $contactSuccess = $this.find('p#contact-success').first();
		var $contactFail = $this.find('p#contact-fail').first();

		$submitButton.addClass('m-progress').prop('disabled', true);
		Meteor.call('sendEmail', {
			from: {
				name: $this.find('input#contact-name').first().val(),
				email: $this.find('input#contact-email').first().val()
			},
			content: $this.find('textarea#contact-content').first().val()
		}, (error, result) => {
			if (error) {
				console.error(error);
				$contactFail.removeClass('hidden');
				setTimeout(() => {
					$contactFail.addClass('hidden');
				}, 2000);
			} else {
				$contactSuccess.removeClass('hidden');
				setTimeout(() => {
					$contactSuccess.addClass('hidden');
				}, 2000);
			}
			$submitButton.removeClass('m-progress').prop('disabled', false);
			$this.trigger('reset');
		});
	}
});
