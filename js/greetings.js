const loginform = document.querySelector("#login-form");
const loginInput = loginform.querySelector("input");
const greeting = document.querySelector("#greeting");
const loginInputbtn = loginform.querySelector("a")



const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    location.href="./clock.html";
    loginform.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);

    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hi! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedusername = localStorage.getItem(USERNAME_KEY);

if (savedusername === null) {
    loginform.classList.remove(HIDDEN_CLASSNAME);
    loginInputbtn.addEventListener("click", onLoginSubmit);
} else {
    paintGreetings(savedusername);
}

