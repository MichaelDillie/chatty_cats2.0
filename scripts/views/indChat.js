'use strict';
var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('backbone/node_modules/underscore');
module.exports = Backbone.View.extend({
tagName: 'div',
template: _.template($('#indChat').html()),

	initialize: function() {
		console.log('i am a view');
		this.render();
	},
	render: function (){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
        console.log('i am rendering');
        this.$el.on('click', directUser);
        
	}


});