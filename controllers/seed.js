//REQUIREMENTS
var express = require('express');
var mongoose = require('mongoose');
var db = process.env.MONGODB_URI || 'mongodb://localhost/mini_app';
var router = express.Router();
var Blog = require('../models/blogs.js');
var User = require('../models/users.js');

//SEED
var user1 = new User({
	name: 'joe21',
	blogs: []
});

var user2 = new User({
	name: 'jesskuss',
	blogs: []
});

var user3 = new User({
	name: 'korywrong',
	blogs: []
});

var user4 = new User({
	name: 'perfectshiiba',
	blogs: []
});

var user5 = new User({
	name: 'freginator',
	blogs: []
});

var user6 = new User({
	name: 'rirywhom',
	blogs: []
});

var user7 = new User({
	name: 'starbuck',
	blogs: []
});

var blog1 = new Blog({
	blog: "There was a day last night when I ran out of mayonnaise.  I just couldn't make the right combination of tuna salad, chicken salad, and potato salad for the best class in existence...  I have never been more sad in my entire life."
});

var blog2 = new Blog({
	blog: "I've been trying to figure out for many days now who decided to bring me a box of 500 forks for my birthday... It's perplexing... I think it's Andrew or Greg, but they just seem too obvious.  Who could have done this?  I am going to think about this every day."
});

var blog3 = new Blog({
	blog: "I went to the beach, and it was just aboot 7 when it started getting dark.  I was really against coming home, but the baegs kept flying away.  I had to chase them."
});

var blog4 = new Blog({
	blog: "Hey guys, thanks for reading my blog, the Kory Wrong experience.  Today, I would like to talk about lifting weights.  I lift weights, bruh.  I lift them good.  I sing while lifting.  I'm also a particularly talented programmer, but I just want to bring my big monitor to class and make everyone jealous.  Kenka is also my favorite place ever.  I thought you all should know this.  Thank you.  Good night.  Have I mentioned that I lift weights?"
});

var blog5 = new Blog({
	blog: "So... I went to my 5th wedding in 4 days yesterday.  I'm starting to lose my mind.  I can only eat so much of the same stuff, you know?  Seeing people is tiring, but I have to keep my pristine smile fresh and ready.  My face hurts.  My feet hurt from dancing and singing the same songs over and over again.  I have a baby shower for my 10th best friend tomorrow morning, and another Product Management interview in the evening.  Boy, my life is hard.  I have to keep moving forward.  I have no choice."
});

var blog6 = new Blog({
	blog: "I got beaten up by Cat again last night for not eating my spinach...  I just want to eat donuts!  Why can't I eat my donuts!"
});

var blog7 = new Blog({
	blog: "Today, I looked at React.  Something amazing happened, though!  I didn't give my computer the death stare!  I didn't shake my fists four times!  I think it's all getting better.  I know I can do this!  Yas!"
});

var blog8 = new Blog({
	blog: "I AM A FOREST OF EVIL!  I AM A FOREST OF EVIL!  IM A FOREST OF EVIL!  IMA FOREST OF EVIL!  I FOREST OF EVIL!  I FOR OF EVIL!  I FO EVIL!  I EVIL!  I EVIL..."
});


//TEST
router.get('/test', function(req, res) {
	console.log('TEST');
});

//SEED
router.get('/', function(req, res) {

	user1.save(function(err) {
		if(err) {
			console.log (err);
		} else {
			console.log('Saved: ' + user1.name);
		};
	});

	user2.save(function(err) {
		if(err) {
			console.log (err);
		} else {
			console.log('Saved: ' + user2.name);
		};
	});

	user3.save(function(err) {
		if(err) {
			console.log (err);
		} else {
			console.log('Saved: ' + user3.name);
		};
	});

	user4.save(function(err) {
		if(err) {
			console.log (err);
		} else {
			console.log('Saved: ' + user4.name);
		};
	});

	user5.save(function(err) {
		if(err) {
			console.log (err);
		} else {
			console.log('Saved: ' + user5.name);
		};
	});

	user6.save(function(err) {
		if(err) {
			console.log (err);
		} else {
			console.log('Saved: ' + user6.name);
		};
	});

	user7.save(function(err) {
		if(err) {
			console.log (err);
		} else {
			console.log('Saved: ' + user7.name);
		};
	});

	blog1.save(function(err) {
		if(err) {
			console.log (err);
		} else {
			console.log('blog 1 saved');
		};
	});

	blog2.save(function(err) {
		if(err) {
			console.log (err);
		} else {
			console.log('blog 2 saved');
		};
	});

	blog3.save(function(err) {
		if(err) {
			console.log (err);
		} else {
			console.log('blog 3 saved');
		};
	});

	blog4.save(function(err) {
		if(err) {
			console.log (err);
		} else {
			console.log('blog 4 saved');
		};
	});

	blog5.save(function(err) {
		if(err) {
			console.log (err);
		} else {
			console.log('blog 5 saved');
		};
	});

	blog6.save(function(err) {
		if(err) {
			console.log (err);
		} else {
			console.log('blog 6 saved');
		};
	});

	blog7.save(function(err) {
		if(err) {
			console.log (err);
		} else {
			console.log('blog 7 saved');
		};
	});

	blog8.save(function(err) {
		if(err) {
			console.log (err);
		} else {
			console.log('blog 8 saved');
		};
	});


	user1.blogs.push(blog1);
	user1.blogs.push(blog2);
	user2.blogs.push(blog3);
	user3.blogs.push(blog4);
	user4.blogs.push(blog5);
	user5.blogs.push(blog6);
	user6.blogs.push(blog7);
	user7.blogs.push(blog8);

	user1.save();
	user2.save();
	user3.save();
	user4.save();

	console.log('dunzo.');
	res.redirect('/users');
});

module.exports = router;