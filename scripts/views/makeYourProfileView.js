var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');
var $ = require('jquery');

module.exports = Backbone.View.extend({
	initialize: function() {
		// _.bindAll (
		// 	this,
		// 	'render',
		// 	'onStartClick'
		// )

		this.render();
		console.log('check');
	},
	render: function() {
		var $makeYourProfile = $('#make-your-profile');
		var $joinAChat = $('#join-a-chat');
		var $learnMore = $('#learn-more');
		var $startButton = $('#start-button');
		var $description = $('.description');
		var $userName = $('.make-profile-username');
		var $email = $('.make-profile-email');
		var $password = $('.make-profile-password');
		var $retype = $('.make-profile-retype');
	 	function onStartClick() {
			$joinAChat.hide();
			$learnMore.hide();
			$description.hide();
			$makeYourProfile.css('height', '26em');
			$userName.show();
			$userName.css({
				display: 'block',
				margin: '0 auto',
				marginTop: '2em',
				marginBottom: '0em',
				width: '10em',
				fontSize: '1.5em'
			});

			$email.show();
			$email.css({
				display: 'block',
				margin: '0 auto',
				marginTop: '1.3em',
				marginBottom: '0em',
				width: '10em',
				fontSize: '1.5em'
			});

			$password.show();
			$password.css({
				display: 'block',
				margin: '0 auto',
				marginTop: '1.3em',
				marginBottom: '0em',
				width: '10em',
				fontSize: '1.5em'
			});
			$retype.show();
			$retype.css({
				display: 'block',
				margin: '0 auto',
				marginTop: '1.3em',
				marginBottom: '0em',
				width: '10em',
				fontSize: '1.5em'
			});
		}
		$startButton.on('click', onStartClick)
	}

});
