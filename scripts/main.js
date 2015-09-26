'use strict';
var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');

var collection = require('./collections/listCollection.js');
var chatView = require('./views/listView.js');
var chatModel = require('./models/listModel.js');


// var chatModel = new chatModel({collection: chatCollection});
// var chatView = new chatView({model: chatModel});

$(document).ready(function() {
console.log('ready');

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