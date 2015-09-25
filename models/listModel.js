'use strict';
var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
	defaults: {
		chat: 'hello',
		username: 'john doe'
	},
	idAttribute: 'ID'

});