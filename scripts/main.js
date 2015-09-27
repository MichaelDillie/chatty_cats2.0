'use strict';

var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');
var $ = require('jquery');

//***************Home Page**********************

var makeYourProfileView = require('./views/makeYourProfileView.js');
var joinAChatView = require('./views/joinAChatView.js');
var learnMoreView = require('./views/learnMoreView.js');
var makeYourProfileModel = require('./models/makeYourProfileModel.js');

//****************Chat Page**********************
var chatCollection = require('./collections/listCollection.js');
var chatView = require('./views/listView.js');
var chatModel = require('./models/listModel.js');
var chatView = require('./views/listView.js');
var indChat = require('./views/indChat.js');

//****************User Page**********************
var userProfileModel = require('./models/userProfileModel.js');
var	userProfileView = require('./views/userProfileView.js')

var chatCollection = new chatCollection();
var chatModel = new chatModel();
var chatView = new chatView();
var indChat = new indChat({model: chatModel});


$(document).ready(function() {
	console.log('ready');

//***************Home Page**********************

	var $makeYourProfile = $('#make-your-profile');
	var $joniAChat = $('#join-a-chat');
	var $learnMore = $('#learn-more');
	var $startButton = $('#start-button');
	var $description = $('.description');
	var $chatButton = $('#chat-button');
	var $userProfile = $('#user-profile')
	var $learnMorePage = $('#learn-more-page');
	var $learnMoreTablet = $('#learn-more-tablet');

	var $chatPage = $('#chatPage');
	var $main = $('#main');
	var $chatBar = $('#chatBar');
	var $chatBox = $('#chatBox');
	var $submitChat = $('#submitChat');

//***************Calling Views**********************

	var profileView = new makeYourProfileView();
	var learnMoreViewing = new learnMoreView();
	var userProfileViewing = new userProfileView();

	var Router = Backbone.Router.extend({
		routes:  {
			'': 'home',
			'Chat': 'onChatPage',
			'Home': 'onHome',
			'UserProfile': 'onUserProfile'
		},
		home: function() {
			$makeYourProfile.show();
			$learnMore.show();
			$joniAChat.show();
			$chatPage.hide();
			$userProfile.hide();
		},
		onChatPage: function() {
			console.log('router test');
			$makeYourProfile.hide();
			$learnMore.hide();
			$joniAChat.hide();
			$chatPage.show();
			$userProfile.hide();
			$learnMorePage.hide();
		},
		onHome: function() {
			$makeYourProfile.show();
			$learnMore.show();
			$joniAChat.show();
			$chatPage.hide();
			$userProfile.hide();
		},
		onUserProfile: function() {
			$makeYourProfile.hide();
			$learnMore.hide();
			$joniAChat.hide();
			$chatPage.hide();
			$userProfile.show();
			$learnMorePage.hide();
			$learnMoreTablet.hide();
		}
	});
	var foo = new Router();
	Backbone.history.start();


  		// Backbone.history.start({hashChange: false});

//****************Chat Page**********************

setInterval(function() {
$.get (
	'https://chatty-cats.herokuapp.com/chats',
	function(show) {
		$('#main').html('');
		$('#main').append(chatView.$el);
		console.log('hello');
			for(var i=0; i<show.length; i++) {
				$('#chatView').append('<div>' + show[i].user_id + ': ' + show[i].message + '</div>');
			}
		},
		'json'
	)

}, 2000);


$('#chatView').append(indChat.$el);


});
