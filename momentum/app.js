const h1= document.querySelector(".hello h1:first-child");

function handleTitleClick() {
 h1.className = "active";
}


h1.addEventListener("click", handleTitleClick);
