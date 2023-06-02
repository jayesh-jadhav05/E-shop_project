// Function to perform user signup


// localStorage.setItem("users",JSON.stringify([]))
function signup() {
   var fname = document.getElementById("firstname").value;
   var lname = document.getElementById("lastname").value;
   var email = document.getElementById("emailid").value;
   var password = document.getElementById("password").value;
 
   // Retrieve user data from local storage
   var users = JSON.parse(localStorage.getItem("users")) || [];
 
   // Check if the username is already taken
   var userExists = users.some(function (u) {
     return u.firstname === fname;
   });
 
   if (userExists) {
     console.log("Username already taken.");
   } else {
     // Create a new user object
     var newUser = {
       firstname: fname,
       lastname : lname,
       email : email,
       password: password,
       mycart : []
     };
 
     // Add the new user to the users array
     users.push(newUser);
 
     // Update the user data in local storage
     localStorage.setItem("users", JSON.stringify(users));
 
     alert("Signup Successfully....!")
     window.location.href = "./login.html"; // Redirect to login page
   }
 }
 
 // Usage example
 document.getElementById("sign").addEventListener("click", function (e) {
   e.preventDefault(); // Prevent form submission
   signup();
 });
 