
Parse.initialize("JJTVzrYgHH04oeM1CvAuS9cKeWQXRLQ8rQOyYnPj", "3vC8VQzkbXQM6JI96ontDh1bTTWNC9gabvKZbGal");
// ------------------------------------------------------ SIGN UP PAGE ------- //

	function myFunction() {
		var username = $('input[name=username]').val();
		var password = $('input[name=password]').val();
		var email = $('input[name=email]').val();
		var phone = $('input[name=phone]').val();

		var user = new Parse.User();
	
		user.set("username", username);
		user.set("email", email);
		user.set("phone", phone);
		user.set("password", password);
		  
		user.signUp(null, {
		  success: function(user) {
		    alert ("Hooray! Let them use the app now!!");
		  },
		  error: function(user, error) {
		    // Show the error message somewhere and let the user try again.
		    alert("Error: " + error.code + " " + error.message);
		  }
					
	    });
	}

		

	






