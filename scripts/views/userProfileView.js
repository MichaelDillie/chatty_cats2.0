var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');
var $ = require('jquery');
var userProfileModel = require('../models/userProfileModel.js');

module.exports = Backbone.View.extend({
	initialize: function() {

		this.render();
	},
	render: function() {
		var $userProfile = $('#user-profile');
		var	$userProfilePic = $('#user-profile-pic');
		var $usersUsername = $('#users-username');
		var $usersName = $('#users-name');
		var $usersEmail = $('#users-email');
		var $profileBtn = $('#profile-button');
		var $name = $('.make-profile-name');
		var $userName = $('.make-profile-username');
		var $email = $('.make-profile-email');

		var url = 'https://chatty-cats.herokuapp.com/users';
		$.ajax({
			url: url,
			method: 'GET',
		})

});
