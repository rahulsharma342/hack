// document.getElementById("loginForm").addEventListener("submit", function(e) {
//     e.preventDefault();

//     let username = document.getElementById("username").value;

//     if (username === "") {
//         alert("Please enter username");
//         return;
//     }

//     // Save to local storage
//     localStorage.setItem("username", username);

//     alert("Username saved successfully!");
// });

// document.getElementById("loginForm").addEventListener("submit", function (e) {
//     e.preventDefault();

//     let username = document.getElementById("username").value;
//     let password = document.getElementById("password").value;

//     if (username === "" || password === "") {
//         alert("Please fill all fields");
//         return;
//     }

//     // Save username in local storage
//     localStorage.setItem("username", username);

//     // Dummy login check
//     if (password === "123456") {
//         alert("Login Successful!");
        
//         // Redirect to home page
//         window.location.href = "home.html";  
//     } else {
//         alert("Incorrect password");
//     }
// });
// document.getElementById("loginForm").addEventListener("submit", function (e) {
//     e.preventDefault();

//     let email = document.getElementById("email").value;
//     let passwordInput = document.getElementById("password").value;

//     // LocalStorage se user data nikaalna
//     let storedUser = JSON.parse(localStorage.getItem("userData"));

//     if (!storedUser) {
//         alert("No user found, please signup first!");
//         return;
//     }

//     // Check email + password
//     if (email === storedUser.email && passwordInput === storedUser.password) {
        
//         // Username save for dashboard usage
//         localStorage.setItem("username", storedUser.name);

//         alert("Login Successful!");

//         // Redirect to home page
//         window.location.href = "home.html";
//     } else {
//         alert("Incorrect Email or Password!");
//     }
// });
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let passwordInput = document.getElementById("password").value;

    // LocalStorage se user data
    let storedUser = JSON.parse(localStorage.getItem("userData"));

    if (!storedUser) {
        alert("No user found! Please signup first.");
        return;
    }

    // Email + Password check
    if (email === storedUser.email && passwordInput === storedUser.password) {

        // Store username for display
        localStorage.setItem("username", storedUser.name);

        alert("Login Successful!");

        // Redirect to index.html
        window.location.href = "index.html";

    } else {
        alert("Incorrect Email or Password!");
    }
});
