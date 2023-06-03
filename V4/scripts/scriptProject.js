var bg = document.querySelector(".background");
var landingH1 = document.querySelector(".landing h1");
var landingH2 = document.querySelector(".landing h2");
var landingMore = document.querySelector(".landing-more");
var proj1 = document.querySelector(".proj1");
var proj2 = document.querySelector(".proj2");
var proj3 = document.querySelector(".proj3");
var proj4 = document.querySelector(".proj4");



window.addEventListener("scroll", function() {

    // Calculer le ratio entre la position du scroll et la hauteur du document
    var ratio = window.scrollY / document.body.scrollHeight;
    console.log(window.scrollY);

    bg.style.top = ratio*-200;

    landingH1.style.paddingRight = ratio*500+"px";
    landingH2.style.paddingLeft = ratio*500+"px";
    landingH1.style.opacity = 100-ratio*500+"%";
    landingH2.style.opacity = 100-ratio*500+"%";
    landingMore.style.opacity = 100-ratio*500+"%";

    if (ratio >= 0.150) {
        proj1.classList.add("bounce");
        proj1.style.visibility = "visible";
    }
    if (ratio >= 0.300) {
        proj2.classList.add("bounce");
        proj2.style.visibility = "visible";
    }
    if (ratio >= 0.450) {
        proj3.classList.add("bounce");
        proj3.style.visibility = "visible";
    }
    if (ratio >= 0.600) {
        proj4.classList.add("bounce");
        proj4.style.visibility = "visible";
    }

});