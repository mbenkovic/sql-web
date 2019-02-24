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

/* Toggle Section */
let toggleCreateEl=document.getElementById("toggle-create");
toggleCreateEl.addEventListener("click", function(ev) {
	if (ev) ev.preventDefault();
	let sectionContentEl=document.querySelector("#section-create .section-content");
	console.log(sectionContentEl);
	if (sectionContentEl.classList.contains("hide")){
		sectionContentEl.classList.remove("hide");
		sectionContentEl.classList.add("show");
	} else if (sectionContentEl.classList.contains("show")){
		sectionContentEl.classList.remove("show");
		sectionContentEl.classList.add("hide");
	}
});