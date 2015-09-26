'use strict';
var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');

var collection = require('./collections/listCollection.js');
var $ = require('jquery');

//***************Home Page**********************

// var homeCollection = require('./collections/homeCollection.js');
var makeYourProfileView = require('./views/makeYourProfileView.js');
var joinAChatView = require('./views/joinAChatView.js');
var learnMoreView = require('./views/learnMoreView.js');
var makeYourProfileModel = require('./models/makeYourProfileModel.js');

var chatView = require('./views/listView.js');
var chatModel = require('./models/listModel.js');


// var chatModel = new chatModel({collection: chatCollection});
// var chatView = new chatView({model: chatModel});


$(document).ready(function() {
	console.log('ready');

//***************Home Page**********************

var messageCollection = new collection();

	$('#chatForm').on('submit', function(e) {
		e.preventDefault();
		messageCollection.create({
		room_name: 'kitty titties',
        message: $('#chatBox').val(),
        user_id: 0,
        room_id: 3,
        created_at: 0,
        updated_at: 0
		})
	});


messageCollection.on('add', function(show) {
	console.log('adding');
	var x = new chatView({model: show});
	$('#main').append(x.$el)
});
messageCollection.fetch();
	// var $makeYourProfile = $('#make-your-profile');
	// var $joinAChat = $('#join-a-chat');
	// var $learnMore = $('#learn-more');
	// var $startButton = $('#start-button');


	// var profileView = new makeYourProfileView();
	var $makeYourProfile = $('#make-your-profile');
	var $joniAChat = $('#join-a-chat');
	var $learnMore = $('#learn-more');
	var $startButton = $('#start-button');
	var $description = $('.description');
	var $chatButton = $('#chat-button');

	var $chatPage = $('#chatPage');
	var $main = $('#main');
	var $chatBar = $('#chatBar');
	var $chatBox = $('#chatBox');
	var $submitChat = $('#submitChat');


	var profileView = new makeYourProfileView();
	var learnMoreViewing = new learnMoreView();
	// var chatView = new joinAChatView();
	// var chatView = new joinAChatView();

	var Router = Backbone.Router.extend({
		routes:  {
			'': 'home',
			'Chat': 'onChatPage'
		},
		home: function() {
			$makeYourProfile.show();
			$learnMore.show();
			$joniAChat.show();
			$chatPage.hide();
		},
		onChatPage: function() {
			console.log('router test');
			$makeYourProfile.hide();
			$learnMore.hide();
			$joniAChat.hide();
			$chatPage.show();
		}
	});
	var foo = new Router();
	Backbone.history.start();


  		// Backbone.history.start({hashChange: false});

//****************Chat Page**********************


// setInterval(function() {
// $.get (
// 	'https://chatty-cats.herokuapp.com/rooms/3/chats',
// 	function(show) {
// 		$('#chatView').html('');
// 		$('#main').append(chatView.$el);
// 		console.log('hello');
// 			for(var i=0; i<show.length; i++) {
// 				$('#chatView').append('<div>' + show[i].user_id + ': ' + show[i].message + '</div>');
// 			}
// 		},
// 		'json'
// 	)
	
// }, 2000);

var addChat = function(e) {
	e.preventDefault();
	$.post (
			'https://chatty-cats.herokuapp.com/chats',
			{message: $('#chatBox').val(),
			user_id: 2,
			room_id: 3

		}

		)
}
var newChat = function(e) {
	$('#newChatView').toggle();
}

// var createNewChat = function(e) {
// 	var newChatName = $('#newChatInput').val();
// 	var newChatCol = Backbone.Collection.extend({
//   model: listModel
// });
// 	newChatCol.save();

// var newChatCol = new newChatCol.create();
// var newGroup = new listView();


// }

$('#submitNewChat').on('click', createNewChat);
$('#usersPop').on('click', newChat);
$('#chatForm').on('submit', addChat);
$('#submitChat').on('click', addChat);
});


