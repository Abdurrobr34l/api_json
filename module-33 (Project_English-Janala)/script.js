// //* EMAIL & PASSWORD ALERT MESSAGE
// alert("Email: abd@gmail.com, Password: 12")

// //* LOGIN FORM
// const userEmailInput = document.getElementById("user-email-input");
// const userPasswordInput = document.getElementById("user-password-input");
// const submitButton = document.getElementById("submit-button");

// submitButton.addEventListener("click", function (stopReload) {
//   stopReload.preventDefault();

//   const email = userEmailInput.value;
//   const password = userPasswordInput.value;

//   if (email === "abd@gmail.com") {
//     if (password === "12") {
//       document.querySelector("header").classList.remove("hidden");
//       document.getElementById("form").classList.add("hidden");
//       userEmailInput.value = "";      
//       userPasswordInput.value = "";      
//     } else {
//       alert("Invalid password");
//     }
//   } else {
//     alert("Invalid email")
//   }

// });

// //* LOGOUT INTERACTIVITY
// const logoutButtons = document.querySelectorAll('.logout-button');

// logoutButtons.forEach(button => {
//   button.addEventListener("click", function (stopReload) {
//     stopReload.preventDefault();

//     document.querySelector("header").classList.add("hidden");
//     document.getElementById("form").classList.remove("hidden");

//   });
// });