'use strict';
var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('backbone/node_modules/underscore');
module.exports = Backbone.View.extend({
	tagName: 'div',
	template: _.template($('#listTemplate').html()),

	initialize: function() {
		console.log('i am a view');
		this.render();
	},
	render: function (){
        this.$el.html(this.template());
        return this;
        console.log('i am rendering');
	}

});
