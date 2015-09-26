var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');
var $ = require('jquery');

module.exports = Backbone.View.extend({
	initialize: function() {
		this.render();
		console.log('test learn more');
	},
	render: function() {
		var $learnMoreBtn = $('#learn-more');
		var $learnMorePage = $('#learn-more-page');
		var $makeYourProfile = $('#make-your-profile');
		var $joinAChat = $('#join-a-chat');
		var $closeLearnMore = $('#close');
		function onLearnMoreClick() {
			$makeYourProfile.hide();
			$joinAChat.hide();
			$learnMoreBtn.hide();
			$learnMorePage.show();
		}
		$learnMoreBtn.on('click', onLearnMoreClick);

		function onCloseClick() {
			$makeYourProfile.show();
			$joinAChat.show();
			$learnMoreBtn.show();
			$learnMorePage.hide();
		}
		$closeLearnMore.on('click', onCloseClick);
	}
});
