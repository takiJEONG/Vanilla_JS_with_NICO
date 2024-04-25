const h1= document.querySelector(".hello h1:first-child");

function handleTitleClick() {
    h1.style.color = "blue";
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}

function handlewindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handlewindowCopy() {
    alert("copier! ARE YOU CHEATING?");
}

function handleWindowOffline() {
    alert("SOS!! No WiFi!!!")
}

function handleWindowOnline() {
    alert("ALL GOOD");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handlewindowResize);
window.addEventListener("copy", handlewindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);