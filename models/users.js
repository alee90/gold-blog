//REQUIREMENTS
var mongoose = require('mongoose');
var express = require('express');
var blogSchema = require('./blogs').schema;

//SCHEMA
var userSchema = mongoose.Schema ({
	name: String,
	blogs: [blogSchema]
});

//PUSH TO MONGOOSE
var User = mongoose.model('User', userSchema);

//EXPORTS
module.exports = User;

