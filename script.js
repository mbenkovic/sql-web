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
let toggleElements=document.getElementsByClassName("toggle");
let toggleListener=function(ev) {
	if (ev) ev.preventDefault();
	let attributeEl=null;
	if (ev.target.tagName==="IMG") {
		attributeEl=ev.target.parentElement;
	} else if (ev.target.tagName="A"){
		attributeEl=ev.target;
	}
	let targetAttribute=attributeEl.getAttribute("data-id");
	let sectionContentEl=document.querySelector("#"+targetAttribute+" .section-content");
	if (sectionContentEl.classList.contains("hide")) {
		sectionContentEl.classList.remove("hide");
		sectionContentEl.classList.add("show");
	} else if (sectionContentEl.classList.contains("show")){
		sectionContentEl.classList.remove("show");
		sectionContentEl.classList.add("hide");
	}
}

for (let el of toggleElements) {	
	el.addEventListener("click", toggleListener);
}

/* function changeImage() {
    if (document.getElementsByClassName("imgSection").src==="section-open.svg") {
    	console.log("dinamo2");
    	document.getElementsByClassName("imgSection").src="section-close.svg";	
    } else {
    	document.getElementsByClassName("imgSection").src="section-open.svg";	
    }
} */
    