'use strict';
var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
	defaults: {
		room_name: '',
        message: '',
        user_id: 0,
        room_id: 0,
        created_at: 0,
        updated_at: 0
	},
	urlRoot: 'https://chatty-cats.herokuapp.com/rooms/3/chats',
	idAttribute: 'ID'

});
console.log('i am a model');