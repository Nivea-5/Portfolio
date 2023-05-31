var body = document.querySelector("body");
var main = document.querySelector("main");

var landingH1 = document.querySelector(".landing h1");
var landingH2 = document.querySelector(".landing h2");
var landingMore = document.querySelector(".landing-more");

var knowMeH1 = document.querySelector(".knowMe h1");
var knowMeH2 = document.querySelector(".knowMe h2");
var knowMeArrow = document.querySelector(".knowMe .arrow");

var projectH1 = document.querySelector(".project h1");
var projectH2 = document.querySelector(".project h2");
var projectArrow = document.querySelector(".project .arrow");

var contactH1 = document.querySelector(".contact h1");
var contactH2 = document.querySelector(".contact h2");
var contactArrow = document.querySelector(".contact .arrow");

window.addEventListener("scroll", function() {

    // Calculer le ratio entre la position du scroll et la hauteur du document
    var ratio = window.scrollY / document.body.scrollHeight;
    console.log(window.scrollY);

    //-------------------------------------------------------------------------------------------------------------body

    if (ratio<0.350) {
        main.style.backdropFilter = "blur("+ratio*20+"px)";
    } else {
        main.style.backdropFilter = "blur(8px)";
    }

    //-------------------------------------------------------------------------------------------------------------landing
    landingH1.style.paddingRight = ratio*500+"px";
    landingH2.style.paddingLeft = ratio*500+"px";
    landingH1.style.opacity = 100-ratio*500+"%";
    landingH2.style.opacity = 100-ratio*500+"%";
    landingMore.style.opacity = 100-ratio*500+"%";

    //-------------------------------------------------------------------------------------------------------------knowMe

    knowMeH1.style.paddingRight = ratio*400+"px";
    knowMeH2.style.paddingLeft = ratio*300+"px";
    knowMeH1.style.opacity = 250-ratio*500+"%";
    knowMeH2.style.opacity = 250-ratio*500+"%";
    if (ratio >= 0.100) {
        knowMeH1.classList.add("appears");
        knowMeH1.style.visibility = "visible";
        knowMeH2.classList.add("waitAppears");
        knowMeH2.style.visibility = "visible";
        knowMeArrow.classList.add("waitAppears");
        knowMeArrow.style.visibility = "visible";
    }
    
    //-------------------------------------------------------------------------------------------------------------project
    
    projectH1.style.paddingRight = ratio*400+"px";
    projectH2.style.paddingLeft = ratio*300+"px";
    projectH1.style.opacity = 400-ratio*500+"%";
    projectH2.style.opacity = 400-ratio*500+"%";
    if (ratio >= 0.400) {
        projectH1.classList.add("appears");
        projectH1.style.visibility = "visible";
        projectH2.classList.add("waitAppears");
        projectH2.style.visibility = "visible";
        projectArrow.classList.add("waitAppears");
        projectArrow.style.visibility = "visible";
    }

});