'use strict';

var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');
var $ = require('jquery');

// var homeCollection = require('./collections/homeCollection.js');
var makeYourProfileView = require('./views/makeYourProfileView.js');
// var joinAChatView = require('./views/joinAChatView.js');
// var learnMoreView = require('./views/learnMoreView.js');
var makeYourProfileModel = require('./models/makeYourProfileModel.js');

var chatCollection = require('./collections/listCollection.js');
var chatView = require('./views/listView.js');
var chatModel = require('./models/listModel.js');
var chatView = require('./views/listView.js');
var indChat = require('./views/indChat.js');

var chatCollection = new chatCollection();
var chatModel = new chatModel();
var chatView = new chatView();
var indChat = new indChat({model: chatModel});


$(document).ready(function() {
	console.log('ready');


	var $makeYourProfile = $('#make-your-profile');
	var $joniAChat = $('#join-a-chat');
	var $learnMore = $('#learn-more');
	var $startButton = $('#start-button');


	var profileView = new makeYourProfileView();

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

// setInterval(function() {
// 	$.ajax({
// 		method: 'GET',
// 		accepts: 'json',
// 		url: 'https://chatty-cats.herokuapp.com/chats',
// 		success: function(show) {
// 			$('#main').html('');
// 			console.log('hello');
// 			for(var i=0; i<show.length; i++) {
// 				$('#chatView').append('<div>' + show[i].user_id + ': ' + show[i].message + '</div>');
// 			}
// 		},
// 		headers: {
// 			'Cache-Control': 'no-cache'
// 		}
// 	});
// }, 2000);


$('#chatView').append(indChat.$el);


});
