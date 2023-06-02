// Function to perform user login

function login() {
   var email = document.getElementById("Email").value;
   var password = document.getElementById("Pass").value;
 
   // Retrieve user data from local storage
   var users = JSON.parse(localStorage.getItem("users")) || [];
 
   // Check if the user exists
   var user = users.find(function (u) {
     return u.email === email && u.password === password;
   });
 
   if (user) {
     // Store the logged in user in local storage
     localStorage.setItem("loggedInUser", JSON.stringify(user));
     alert("Logged Successfuly")
     window.location.href = "./shop.html"; // Redirect to dashboard page
     document.getElementById('shopNowIn').href = "./shop.html";
   } else {
          alert("Invalid username or password.")
      }
 }
 
 // Usage example
 document.getElementById("login").addEventListener("click", function (e) {
   e.preventDefault(); // Prevent form submission
   login();
 });
 