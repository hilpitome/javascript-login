
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
		  
	// save the user to the cloud storage
		user.signUp(null, {
		     success: function(user) {
		           // return the success response
		           alert("Success!");
		           
		     },
		     error: function(user, error) {
		            // return the error response
		            alert("Error: " + error.code + " " + error.message);
		      }
		});
	}

    function myUser() {
		var username = $('input[name=username]').val();
	    var password = $('input[name=password]').val();
					
	    // check log in details with parse.com
		    Parse.User.logIn(username , password, {
			success: function(user) {
			       
			       $( ":mobile-pagecontainer" ).pagecontainer( "change", "home.html" );
			       
			},
			error: function(user, error) {
				// The login failed. Check error to see why.
				console.log("fail");
			}
	    });
    }
		

	






