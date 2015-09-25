'use strict';

var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');
var $ = require('jquery');
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

$('#main').append(chatView.$el);
$('#chatView').append(indChat.$el);

});