'use strict';

var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');
var $ = require('jquery');
var homeCollection = require('./collections/homeCollection.js');
var makeYourProfileView = require('./views/makeYourProfileView.js');
// var joinAChatView = require('./views/joinAChatView.js');
// var learnMoreView = require('./views/learnMoreView.js');
var makeYourProfileModel = require('./models/makeYourProfileModel.js');

$(document).ready(function() {
	console.log('ready');


	var $makeYourProfile = $('#make-your-profile');
	var $joniAChat = $('#join-a-chat');
	var $learnMore = $('#learn-more');
	var $startButton = $('#start-button');

	var profileView = new makeYourProfileView();

});
