const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");



function onLoginSubmit(event) {
    tomato.preventDefault();
  console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);
