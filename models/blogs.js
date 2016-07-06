//REQUIREMENTS
var mongoose = require('mongoose');

//SCHEMA
var blogSchema = mongoose.Schema({
	blog: String,
	createdAt: { type: Date, default: Date.now }
});

//PUSH TO MONGOOSE
var Blog = mongoose.model('Blog', blogSchema);

//EXPORTS
module.exports = Blog;
