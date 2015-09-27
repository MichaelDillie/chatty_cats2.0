'use strict';
var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');

var collection = require('./collections/listCollection.js');
var $ = require('jquery');


var makeYourProfileView = require('./views/makeYourProfileView.js');
var joinAChatView = require('./views/joinAChatView.js');
var learnMoreView = require('./views/learnMoreView.js');
var makeYourProfileModel = require('./models/makeYourProfileModel.js');

var chatView = require('./views/listView.js');
var chatModel = require('./models/listModel.js');
var chatGoup = require('./models/groupModel.js')


var chatroomNum = 3;
$(document).ready(function() {

var messageCollection = new collection();

	$('#chatForm').on('submit', function(e) {
		e.preventDefault();

		$.post('https://chatty-cats.herokuapp.com/rooms/'+chatroomNum+'/chats',
			{
				room_name: 'Wrapsafe',
		        message: $('#chatBox').val(),
		        user_id: 0,
		        room_id: chatroomNum,
		        created_at: 0,
		        updated_at: 0
			}).done(function(data){
				console.log('ran and got back', data);
			});
	});


messageCollection.on('add', function(show) {
	var x = new chatView({model: show});
	$('#main').append(x.$el)
});
messageCollection.fetch();
	
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
			$makeYourProfile.hide();
			$learnMore.hide();
			$joniAChat.hide();
			$chatPage.show();
		}
	});
	var foo = new Router();
	Backbone.history.start();


var populate = function() {
	
	var url = 'https://chatty-cats.herokuapp.com/rooms';
	$.ajax
	({
    url: url,
    method: 'GET',
    success: function(response) {
		for (var i=0;i<response.length;i++){
    	$('#groupSelectDrop').append('<option id="'+i+'"value="'+i+'">' + response[i].name+'</option>')
    	}
	}
    	
    	
    
	})

}
populate();


var switchGroup = function() {
	$('#main').html('');
	chatroomNum = this.value;
	$.get('https://chatty-cats.herokuapp.com/rooms/'+this.value+'/chats').done(function(data){
		data.forEach(function(model){
			var newModel = new chatModel(model);
			var newChatRoomMessage = new chatView({model:newModel})
			$('#main').append(newChatRoomMessage.$el);
		});	
	});
	

}
var createNewGroup = function(e) {
	e.preventDefault();
	console.log('New Group Button Clicked!');
	var newGroup = new chatGroup();


}

$('#groupSelectDrop').on('change', switchGroup);
$('#submitNewChat').on('click', createNewGroup);
var newChat = function() {
	$('#newChatView').toggle();
}

$('#usersPop').on('click', newChat);
});


