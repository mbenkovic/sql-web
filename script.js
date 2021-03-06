/* Open */
function openNav(ev) {
	if (ev) ev.preventDefault();
	document.getElementById("main-nav").style.display = "block";
}

/* Close */
function closeNav(ev) {
	document.getElementById("main-nav").style.display = "none";
}


let closeNavEls=document.querySelectorAll("#main-nav a");
for (let el of closeNavEls) {
	el.addEventListener("click", closeNav);
}


let openNavEl=document.getElementById("open-nav");
openNavEl.addEventListener("click", openNav);

/* Toggle Section */
let toggleElements=document.getElementsByClassName("toggle");
let toggleListener=function(ev) {
	if (ev) ev.preventDefault();
	let attributeEl=null;
	if (ev.target.tagName==="IMG") {
		attributeEl=ev.target.parentElement;
	} else if (ev.target.tagName==="A"){
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

/*Change Section Image */
let imgElements=document.getElementsByClassName("imgSection");
for (let el of imgElements) {
	el.addEventListener("click", changeImage);
}

function changeImage(ev) {
    if (ev) ev.preventDefault();
    let oldSrc=ev.target.getAttribute("src");
    let newSrc;
    if (oldSrc==="section-open.svg") {
    	newSrc="section-close.svg";	
    } else if (oldSrc==="section-close.svg") {
    	newSrc="section-open.svg";	
    }
    ev.target.setAttribute("src", newSrc);
}
    