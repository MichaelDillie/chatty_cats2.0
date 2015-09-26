var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');
var $ = require('jquery');

module.exports = Backbone.View.extend({
	initialize: function() {
		this.render();
		console.log('check2');
	},
	render: function() {

		//******Chat Page******
		var $main = $('#main');
		var $chatBar = $('#chatBar');
		var $chatBox = $('#chatBox');
		var $submitChat = $('#submitChat');
		//******Home Page******
		var $joinAChat = $('#join-a-chat');
		var $description = $('.description');
		var $chatButton = $('#chat-button');

		function onChatClick(e) {
			e.preventDefault();
			console.log('works');
			var $makeYourProfile = $('#make-your-profile');
			var $learnMore = $('#learn-more');
			var $joniAChat = $('#join-a-chat');
			var $chatButton = $('#chat-button');
			$makeYourProfile.hide();
			$learnMore.hide();
			$joniAChat.css({
				display: 'block',
				margin: 'none'
			});
		}
		$chatButton.on('click', onChatClick);


	}
});
