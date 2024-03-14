/**
 * fichier contenant tous les elements de la page web courante
 */

let project = document.querySelector(".project");
let main = document.querySelector("main");
let parallaxElem = document.querySelectorAll(".parallax");
let background = document.querySelector(".background");
let hamburgerButton = document.querySelector(".hamburger");
let nav = document.querySelector("nav");
let body = document.querySelector("body");

const View = {
    project,
    main,
    parallaxElem,
    background,
    hamburgerButton,
    nav,
    body
  };

export function updateView() {
    View.project = document.querySelector(".project");
    View.main = document.querySelector("main");
    View.parallaxElem = document.querySelectorAll(".parallax");
    View.background = document.querySelector(".background");
    View.hamburgerButton = document.querySelector(".hamburger");
    View.nav = document.querySelector("nav");
    View.body = document.querySelector("body");
}

export default View;