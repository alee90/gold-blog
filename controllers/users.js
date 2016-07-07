//REQUIREMENTS
var express = require('express');
var router = express.Router();
var User = require('../models/users.js');
var Blog = require('../models/blogs.js');

//GET ALL USERS
router.get('/', function(req, res){
	console.log('!===== INDEX =====!')
	User.find({}, function(err, user){
		res.json(user);
	});
});

//GET USER BY ID
router.get('/:id', function(req, res) {
	console.log('!===== SHOW =====!')
	User.findById(req.params.id).then(function(user) {
		res.json(user);
	});
});

//CREATE A USER
router.post('/', function(req, res) {
	var user = new User(req.body);
	user.save(function(err, user) {
		if(err) {
			console.log(err);
			res.json(error);
		} else {
			User.find({}, function(err, user){
				res.redirect('/');
			});
		}
	});
});

//CREATE BLOG
router.post('/:id/blogs', function(req,res){
	User.findById(req.params.id).then(function(user){
		Blog.create(req.body).then(function(blog){
			console.log(blog);
			user.blogs.push(blog);
			user.save();
			blog.save();
			console.log('!===== BLOG SAVE =====!!');
			res.redirect('/')
		});
	})
})

//DELETE BLOG
router.delete('/:id/blogs/:blog_id', function(req, res) {
	console.log(req.params);
	User.findOneAndUpdate(
		{ _id: req.params.id}, 
		{$pull: {blogs: {_id: req.params.blog_id}}},
		function(err, user) {
			if(err) {
				console.log(err)
			} else {
				user.save(function(err, user){
					User.findById(user._id).then(function(blog) {
						res.json(user.blogs);
					});
				});
			}
	});
});
//EXPORT
module.exports = router;