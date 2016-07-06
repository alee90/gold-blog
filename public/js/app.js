var $homeButton = $('<button>Home</button>')
var $home = $('#home-button');
$home.append($homeButton);

var $header = $('#header')
var $head1 = $('<h1>The Thoughts of Gold</h1>')
$header.append($head1);

$(document).ready(function(){
	console.log('herro')

	var createUserForm = function(){
		var $createUser = $('#create-user');
		var $userForm = $('<form></form>');
			$userForm.attr('method', 'POST');
			$userForm.attr('action', '/users');
			$userForm.attr('id', 'userform');
		var $userInput = $('<input><br>');
			$userInput.attr('type', 'text');
			$userInput.attr('name', 'name');
			$userInput.attr('placeholder', 'ENTER NEW USER!');
			$userInput.attr('id', 'usersub')
		var $userSubmit = $('<button id="usersubmit">Submit</button>');
		$userForm.append($userInput);
		$userForm.append($userSubmit);
		$createUser.append($userForm);
		
		$userSubmit.click(function(){
			var user = $('#usersub').val();
			createUser();
		})
	}

	createUserForm();

	var blogForm = function(x){
		console.log(x._id);

		var $blogForm = $('<form></form>');
			$blogForm.attr('method', 'POST');
			$blogForm.attr('action', '/users/'+x._id+'/blogs');
			$blogForm.attr('id', 'blogform');
		var $blogInput = $('<textarea></textarea><br>');
			$blogInput.attr('type', 'text');
			$blogInput.attr('name', 'blog');
			$blogInput.attr('placeholder', 'blog');
			$blogInput.attr('id', 'postsub')
		var $blogSubmit = $('<button>Submit</button>');
		$blogForm.append($blogInput);
		$blogForm.append($blogSubmit);
		$('#create-blog').append($blogForm);

		// $postSubmit.click(function(){
		// 	createPost();
	// })
}

	var $userForm = $('#userform');
	var $blogform = $('#create-blog');
	$('#create-blog').hide();

	var $blog = $('#blog');

	var showUser = function(){
		var $bloggerList = $('<ul id="bloglist"></ul>');
		$.ajax({
			method: 'GET',
			url: '/users',
			success: function(x){
				console.log(x);
				renderUser(x);
			},
			error: function(err){
				console.log(error)
			}
		})
	}

	showUser();

	// var $homeButton = $('<button>Home</button>')
	// var $home = $('#home-button');
	// $home.append($homeButton);
	$homeButton.click(function(e){
		e.preventDefault();
		$header.empty();
		var $head1 = $('<h1>The Thoughts of Gold</h1>');
		$header.append($head1);
		var $blog = $('#blog');
		$userForm.show();
		$('#create-blog').hide();
		$blog.empty()
		showUser();
	})


	var renderUser = function(data){
		var $blogList = $("<ul id='blogger-list'></ul>")
		console.log(data)
		data.forEach(function(x){
			// console.log(x.name);
			// console.log(x._id);
			var $user = $("<h2><li class='user' data-attribute=" + x._id + ">" + x.name + "</li></h2>");
			$user.click(function(){
				var target = $(event.target);
				showBlog(target.attr("data-attribute"));
			});
			$blogList.append($user);
			$blog.append($blogList);

		})
	}

	var showBlog = function(user_id) {
		$.ajax({
			url: '/users/' + user_id,
			method: 'GET',
			success: function(x){
				console.log(x);
				renderBlogs(x);

			}
		});

	var renderBlogs = function(x){
		console.log(x._id)
		$('#create-blog').empty();
		$('#create-blog').show();
		blogForm(x);

		$header.empty();
		var $head2 = $('<h1>'+x.name+'</h1>');
		$header.append($head2);


		var $blogContainer = $('#blog');
		$userForm.hide();
		$blogContainer.empty();
		var $blogList = $("<ul class='ind-blog'></ul>")
		var userid = x._id;
		console.log(x);
		x.blogs.forEach(function(y){
			var date = new Date(y.createdAt);
			var d = date.toDateString();
			console.log(d);
			var $currblog = $("<li class='user-item'>"+y.blog+"</li>");
			var $dateTime = $("<li class='user-item'>"+d+"</li>");
			var $deleteButton = $("<button data-attribute=" + y._id + ">" + "DELETE</button>")
			$deleteButton.click(function(){
				var target = $(event.target);
				deletePoem(userid, target.attr("data-attribute"));
			});
			$blogList.append($dateTime);
			$blogList.append($currblog);
			$blogList.append($deleteButton);

		})
		
		$blogContainer.append($blogList)
	}

	var createUser = function() {
	    $('userForm').submit(function(e) {
	    	e.preventDefault();
			$.ajax({
		 		url: $userForm.attr('action'),
		      	data: $userForm.serialize(),
			}).done(function(data){
				console.log('!==== CREATE USER FRONT ====!');
			});
			return false;
		});
	};

	var createPost = function(){
		console.log('CREATEPOST');
	    $('postForm').submit(function(e) {
	    	e.preventDefault();
			$.ajax({
		 		url: $postForm.attr('action'),
		      	data: $postForm.serialize(),
			}).done(function(data){
				console.log('added');
			});
			return false;
		});
	};

	var deletePoem = function(userid, blogid){
		console.log(userid)
		$.ajax({
			url: '/users/' + userid + '/blogs/' + blogid,
			method: 'DELETE',
			error: function(){
				console.log("something isn't deleting")
			},
			success: function(data){
				location.reload();
			}
	});	
}
};

})