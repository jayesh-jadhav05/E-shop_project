
const userData = JSON.parse(localStorage.getItem("loggedInUser"));

console.log(userData)
document.getElementById('firstname').value = userData.firstname;
document.getElementById('lastname').value = userData.lastname;
