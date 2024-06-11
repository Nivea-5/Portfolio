import designer from "./designer.js";
import Utils from "./utils.js"

const utils = new Utils();

window.onload = function() {
    Utils.activateLoader();
  };

const appearsOnScrollElements = document.querySelectorAll(".appearsOnScroll");


await designer.drawNavBar("accueil");
await designer.drawFooter();
Utils.disactivateLoader();
//utils.drawPopUp();

document.querySelector(".container").addEventListener("scroll", () => {
    appearsOnScrollElements.forEach((element) => {
        Utils.appearsOnScroll(element);
    });
    Utils.setMaxContent();
});