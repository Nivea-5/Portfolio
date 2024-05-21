import designer from "./designer.js";
import Utils from "./utils.js"

const utils = new Utils();

const appearsOnScrollElements = document.querySelectorAll(".appearsOnScroll");
designer.drawNavBar("accueil");
designer.drawFooter();

//utils.drawPopUp();

document.querySelector(".container").addEventListener("scroll", () => {
    appearsOnScrollElements.forEach((element) => {
        Utils.appearsOnScroll(element);
    });
});