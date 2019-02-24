/* Open */
function openNav(ev) {
	console.log("openNav");
	if (ev) ev.preventDefault();
	document.getElementById("main-nav").style.display = "block";
}

/* Close */
function closeNav(ev) {
	console.log("closeNav");
	if (ev) ev.preventDefault();
	document.getElementById("main-nav").style.display = "none";
}

let closeNavEl=document.getElementById("close-nav");
closeNavEl.addEventListener("click", closeNav);

let openNavEl=document.getElementById("open-nav");
openNavEl.addEventListener("click", openNav);

// closeNav();