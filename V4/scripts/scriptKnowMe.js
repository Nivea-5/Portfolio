var bg = document.querySelector(".background");
var landingH1 = document.querySelector(".landing h1");
var landingH2 = document.querySelector(".landing h2");
var landingMore = document.querySelector(".landing-more");
var me = document.querySelector(".me");
var scholar = document.querySelector(".scholar");
var university = document.querySelector(".university");


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

    if (ratio >= 0.100) {
        me.classList.add("bounce");
        me.style.visibility = "visible";
    }
    if (ratio >= 0.300) {
        scholar.classList.add("bounce");
        scholar.style.visibility = "visible";
    }
    if (ratio >= 0.500) {
        university.classList.add("bounce");
        university.style.visibility = "visible";
    }
});