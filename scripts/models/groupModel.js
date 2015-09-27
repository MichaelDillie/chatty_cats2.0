'use strict';
var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
	defaults: {
		name: '',
		created_at: '',
		updated_at: ''
	},
	urlRoot: 'https://chatty-cats.herokuapp.com/rooms/',
	// idAttribute: 'id'

});
console.log('i am a model');