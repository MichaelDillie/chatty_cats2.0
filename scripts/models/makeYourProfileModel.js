var Backbone = require('backbone')
module.exports = Backbone.Model.extend({
	defaults: {
		username: '',
		email: '',
		password: '',
		about: ''
	}
});
