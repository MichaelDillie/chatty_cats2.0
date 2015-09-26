'use strict';
var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');
var listModel = require('../models/listModel.js');


module.exports = Backbone.View.extend({
	tagName: 'div',
	// template: _.template($('#listTemplate').html()),

	initialize: function() {
		_.bindAll(
			this,
			'render'
		);
		console.log('initialized');
		this.render();
		this.model.on('change', this.render);
	},
	render: function (){
		console.log('i am rendering');
        this.$el.html('<div>' + this.model.get('user_id') + ':' + this.model.get('message') + '</div>');
        
	},

});
