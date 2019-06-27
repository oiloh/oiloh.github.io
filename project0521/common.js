
var headerEl = document.querySelector("header");
var navLis = headerEl.querySelectorAll(".menu > ul > li");
for (var i = 0; i < navLis.length; i++) {
    navLis[i].addEventListener("mouseenter", menuOn);
    navLis[i].addEventListener("mouseleave", menuOut);
}

function menuOn() {
    console.log("adsf");
    headerEl.classList.add("on");
}
function menuOut() {
    console.log("adsf");
    headerEl.classList.remove("on");
}