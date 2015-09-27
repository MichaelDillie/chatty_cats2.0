var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');
var $ = require('jquery');

module.exports = Backbone.View.extend({
	initialize: function() {

		this.render();
		console.log('check');
	},
	render: function() {
		var $makeYourProfile = $('#make-your-profile');
		var $joinAChat = $('#join-a-chat');
		var $learnMore = $('#learn-more');
		var $startButton = $('#start-button');
		var $description = $('.description');
		var $name = $('.make-profile-name');
		var $userName = $('.make-profile-username');
		var $email = $('.make-profile-email');
		var $password = $('.make-profile-password');
		var $retype = $('.make-profile-retype');
		var $joinBtn = $('#join');
		var $cancelBtn = $('#cancel-profile');
		var name = $name.val();
		var userName = $userName.val();
		var email = $email.val();
		var password = $password.val();
		var retype = $retype.val();
		var $passwordError1 = $('#password-error1');
		var $passwordError2 = $('#password-error2');
		var $form = $('#make-profile-form')
	 	function onStartClick() {
			$joinAChat.hide();
			$learnMore.hide();
			$description.hide();
			$makeYourProfile.css('height', '26em');
			$userName.show();
			$joinBtn.css({
				display: 'inline-block',
				marginRight: '.25em'
			});
			$cancelBtn.css({
				display: 'inline-block',
				marginLeft: '.25em'
			});
			$startButton.hide();

			$name.show();
			$name.css({
				display: 'block',
				margin: '0 auto',
				marginTop: '2em',
				marginBottom: '0em',
				width: '10em',
				fontSize: '1.5em'
			});

			$userName.css({
				display: 'block',
				margin: '0 auto',
				marginTop: '.75em',
				marginBottom: '0em',
				width: '10em',
				fontSize: '1.5em'
			});

			$email.show();
			$email.css({
				display: 'block',
				margin: '0 auto',
				marginTop: '.75em',
				marginBottom: '0em',
				width: '10em',
				fontSize: '1.5em'
			});

			$password.show();
			$password.css({
				display: 'block',
				margin: '0 auto',
				marginTop: '.75em',
				marginBottom: '0em',
				width: '10em',
				fontSize: '1.5em'
			});
			$retype.show();
			$retype.css({
				display: 'block',
				margin: '0 auto',
				marginTop: '.75em',
				marginBottom: '0em',
				width: '10em',
				fontSize: '1.5em'
			});
		}
		$startButton.on('click', onStartClick)

		function onCancelClick() {
			$joinAChat.show();
			$learnMore.show();
			$description.show();
			$name.hide();
			$userName.hide();
			$startButton.show();
			$email.hide();
			$password.hide();
			$retype.hide();
			$cancelBtn.hide();
			$joinBtn.hide();
			$passwordError1.hide();
			$passwordError2.hide();
			$makeYourProfile.css('height', '9em');
		}
		$cancelBtn.on('click', onCancelClick);

		$form.submit(function(e) {
			e.preventDefault();
			var name = $name.val();
			var userName = $userName.val();
			var email = $email.val();
			var password = $password.val();
			var retype = $retype.val();
			var $passwordError1 = $('#password-error1');
			var $passwordError2 = $('#password-error2');

			if(password === retype && password.length > 6) {
				console.log('good')
				$passwordError1.hide();
				$passwordError2.hide();

				$.post(
					'https://chatty-cats.herokuapp.com/users', {
						name: name,
						username: userName,
						email: email,
						about: password
					}
				)
			} else if(password !== retype) {
				$passwordError2.hide();
				$passwordError1.show();
				$password.css('borderColor', 'red');
				$retype.css('borderColor', 'red');
				console.log(password.length);

			} else if(password !== retype && password.length < 6) {
				$passwordError2.show();
				$passwordError1.show();
				$password.css('borderColor', 'red');
				$retype.css('borderColor', 'red');
				console.log(password.length)
			} else {
				$passwordError2.show();
				$passwordError1.hide();
				$password.css('borderColor', 'red');
				$retype.css('borderColor', 'red');
			}
		});
	}
});
