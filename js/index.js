import Utils from "./utils.js"

const utils = new Utils();

const appearsOnScrollElements = document.querySelectorAll(".appearsOnScroll");
utils.drawNavBar("accueil");
utils.drawFooter();

//utils.drawPopUp();

document.querySelector(".container").addEventListener("scroll", () => {
    appearsOnScrollElements.forEach((element) => {
        utils.appearsOnScroll(element);
    });
});