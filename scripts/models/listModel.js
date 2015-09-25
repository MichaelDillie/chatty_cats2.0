'use strict';
var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
	defaults: {
        message: 'Hello',
        user_id: 0,
        room_id: 0,
        created_at: 0,
        updated_at: 0
	},
	idAttribute: 'ID'

});
console.log('i am a model');