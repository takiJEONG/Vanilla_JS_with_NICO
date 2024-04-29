const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button")


function btnClick() {
console.dir(loginInput)
console.log("Click!!!")
}


loginButton.addEventListener("click",btnClick);