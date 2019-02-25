/* Open */
function openNav(ev) {
	console.log("openNav");
	if (ev) ev.preventDefault();
	document.getElementById("main-nav").style.display = "block";
	document.getElementById("section-create").style.display = "none";
	document.getElementById("section-insert").style.display = "none";
	document.getElementById("section-update").style.display = "none";
	document.getElementById("section-delete").style.display = "none";
}

/* Close */
function closeNav(ev) {
	console.log("closeNav");
	if (ev) ev.preventDefault();
	document.getElementById("main-nav").style.display = "none";
	document.getElementById("section-create").style.display = "block";
	document.getElementById("section-insert").style.display = "block";
	document.getElementById("section-update").style.display = "block";
	document.getElementById("section-delete").style.display = "block";
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

let toggleInsertEl=document.getElementById("toggle-insert");
toggleInsertEl.addEventListener("click", function(ev) {
	if (ev) ev.preventDefault();
	let sectionContentEl=document.querySelector("#section-insert .section-content");
	console.log(sectionContentEl);
	if (sectionContentEl.classList.contains("hide")){
		sectionContentEl.classList.remove("hide");
		sectionContentEl.classList.add("show");
	} else if (sectionContentEl.classList.contains("show")){
		sectionContentEl.classList.remove("show");
		sectionContentEl.classList.add("hide");
	}
});

let toggleUpdateEl=document.getElementById("toggle-update");
toggleUpdateEl.addEventListener("click", function(ev) {
	if (ev) ev.preventDefault();
	let sectionContentEl=document.querySelector("#section-update .section-content");
	console.log(sectionContentEl);
	if (sectionContentEl.classList.contains("hide")){
		sectionContentEl.classList.remove("hide");
		sectionContentEl.classList.add("show");
	} else if (sectionContentEl.classList.contains("show")){
		sectionContentEl.classList.remove("show");
		sectionContentEl.classList.add("hide");
	}
});

let toggleDeleteEl=document.getElementById("toggle-delete");
toggleDeleteEl.addEventListener("click", function(ev) {
	if (ev) ev.preventDefault();
	let sectionContentEl=document.querySelector("#section-delete .section-content");
	console.log(sectionContentEl);
	if (sectionContentEl.classList.contains("hide")){
		sectionContentEl.classList.remove("hide");
		sectionContentEl.classList.add("show");
	} else if (sectionContentEl.classList.contains("show")){
		sectionContentEl.classList.remove("show");
		sectionContentEl.classList.add("hide");
	}
});