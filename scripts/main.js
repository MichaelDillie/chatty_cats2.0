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
var chatGroup = require('./models/groupModel.js');


//****************User Page**********************
var userProfileModel = require('./models/userProfileModel.js');
var	userProfileView = require('./views/userProfileView.js')


var chatroomNum = 1;
$(document).ready(function() {

var messageCollection = new collection();

	$('#chatForm').on('submit', function(e) {
		e.preventDefault();
		console.log('attempting post');


		$.post('https://chatty-cats.herokuapp.com/chats',
			{
		        message: $('#chatBox').val(),
		        user_id: 5,
		        room_id: chatroomNum
			}).done(function(data){
				console.log('ran and got back', data);
				messageCollection.fetch();
				$('#chatBox').val('');
			});
	}); 	


messageCollection.on('add', function(show) {
	console.log('added');
	var x = new chatView({model: show});
	$('#main').prepend(x.$el)
});
messageCollection.fetch();

	var $makeYourProfile = $('#make-your-profile');
	var $joniAChat = $('#join-a-chat');
	var $learnMore = $('#learn-more-btn-wrapper');
	var $startButton = $('#start-button');
	var $description = $('.description');
	var $chatButton = $('#chat-button');
	var $userProfile = $('#user-profile')
	var $learnMorePage = $('#learn-more-page');
	var $learnMoreTablet = $('#learn-more-tablet');
	var $profileArea = $('#profile-area');

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
			$('#usersPop').hide();
			$profileArea.hide();
			$('#newChatView').hide();
		},
		onChatPage: function() {
			$makeYourProfile.hide();
			$learnMore.hide();
			$joniAChat.hide();
			$chatPage.show();
			$userProfile.hide();
			$learnMorePage.hide();
			$('#usersPop').show();
			$learnMoreTablet.hide();
			$profileArea.hide();

		},
		onHome: function() {
			$makeYourProfile.show();
			$learnMore.show();
			$joniAChat.show();
			$chatPage.hide();
			$userProfile.hide();
			$('#usersPop').hide();
			$profileArea.hide();
			$('#newChatView').hide();
		},
		onUserProfile: function() {
			$makeYourProfile.hide();
			$learnMore.hide();
			$joniAChat.hide();
			$chatPage.hide();
			$userProfile.show();
			$learnMorePage.hide();
			$learnMoreTablet.hide();
			$('#usersPop').hide();
			$('#newChatView').hide();
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
		for (var i=1;i<response.length;i++){
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
	var input = $('#newChatInput').val();
	var newGroup = new chatGroup();
	$.post('https://chatty-cats.herokuapp.com/rooms',
			{
		        name: input,
		        
			}).done(function(data){
				console.log('getting group ID');
				console.log(data.id);
			chatroomNum = data.id;
				console.log('created new room', data);
				$('#main').html('');
			})
			$.get('https://chatty-cats.herokuapp.com/rooms/'+chatroomNum+'/chats').done(function(data){
		data.forEach(function(model){
			console.log('populate new room');
			var newModel = new chatModel(model);
			var newChatRoomMessage = new chatView({model:newModel})
			$('#main').prepend(newChatRoomMessage.$el);
		})

// END OF IT 
	})
}





$('#groupSelectDrop').on('change', switchGroup);
$('#submitNewChat').on('click', createNewGroup);


var newChat = function() {
	$('#newChatView').toggle();
}


$('#usersPop').on('click', newChat);
});


