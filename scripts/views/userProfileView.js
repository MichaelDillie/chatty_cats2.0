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


		// function user() {
		// 	var url = 'https://chatty-cats.herokuapp.com/users';
		// 	$.ajax({
		// 		url: url,
		// 		method: 'GET',
		// 		success: function(response) {
		// 			for(var i = 0; i < 1; i++) {
		// 				$usersUsername.append('<option id="' + i + '">' + response[1].id + '</option>')
		// 			}
		// 		}
		// 	});
		// }
		// user();
		function profileUserName() {
			var url = 'https://chatty-cats.herokuapp.com/users';
			$.ajax({
				url: url,
				method: 'GET',
				success: function(response) {
					for(var i = 0; i < 1; i++) {
						$usersUsername.append('<option>' + 'Welcome Back ' + '</option>')
						$usersUsername.append('<div>' + response[1].username + '</div>')
					}
				}
			});
		}
		profileUserName();
		function profileName() {
			var url = 'https://chatty-cats.herokuapp.com/users';
			$.ajax({
				url: url,
				method: 'GET',
				success: function(response) {
					for(var i = 0; i < 1; i++) {
						$usersName.append('<option>' + 'Name: ' + '</option>' + '<div>' + response[1].name + '</div>')
					}
				}
			});
		}
		profileName();
		function profileEmail() {
			var url = 'https://chatty-cats.herokuapp.com/users';
			$.ajax({
				url: url,
				method: 'GET',
				success: function(response) {
					for(var i = 0; i < 1; i++) {
						$usersEmail.append('<option>' + 'Email - '  + '</option>')
						$usersEmail.append('<div>' + response[1].email + '</div>')
					}
				}
			});
		}
		profileEmail();
	}
});
