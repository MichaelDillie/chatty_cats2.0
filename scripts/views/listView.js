'use strict';
var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');
var listModel = require('../models/listModel.js');


module.exports = Backbone.View.extend({
	tagName: 'div',
	template: _.template($('#listOfMessages').html()),

	initialize: function() {
		// _.bindAll(
		// 	this,
		// 	'render'
		// );
		this.render();
		//this.model.on('change', this.render);
	},
	render: function (){
        this.$el.html(this.template(this.model.toJSON()));
  //       $('#submitNewChat').submit(function(e) {
		// e.preventDefault();
		// $.post (
		// 	'https://chatty-cats.herokuapp.com/chats',
		// 	{
		// 	message: $('#chatBox').val(),
		// 	user_id: 2,
		// 	room_id: 3
		// 	}
			// )
		
	// });
		return this;
}
});
