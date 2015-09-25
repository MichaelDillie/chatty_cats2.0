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
	 	function onStartClick() {
			$joinAChat.hide();
			$learnMore.hide();
		}
		$startButton.on('click', onStartClick)
	}

});
