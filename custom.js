
Parse.initialize("JJTVzrYgHH04oeM1CvAuS9cKeWQXRLQ8rQOyYnPj", "3vC8VQzkbXQM6JI96ontDh1bTTWNC9gabvKZbGal");

var user = new Parse.User();
user.set("username", "my name");
user.set("password", "my pass");
user.set("email", "email@example.com");
  
// other fields can be set just like with Parse.Object
user.set("phone", "650-555-0000");
  
user.signUp(null, {
  success: function(user) {
    // Hooray! Let them use the app now.
  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
});

