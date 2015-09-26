'use strict';
var listModel = require('../models/listModel.js');
var Backbone = require('backbone');
module.exports = Backbone.Collection.extend({
	model: listModel,
	url: 'https://chatty-cats.herokuapp.com/rooms/3/chats'

});
console.log('i am a collection');