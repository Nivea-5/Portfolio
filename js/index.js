import designer from "./designer.js";
import Utils from "./utils.js"

const utils = new Utils();



const appearsOnScrollElements = document.querySelectorAll(".appearsOnScroll");



await designer.drawNavBar("accueil");
await designer.drawFooter();
//utils.drawPopUp();

Utils.makeImgClickable();

document.querySelector(".container").addEventListener("scroll", () => {
    appearsOnScrollElements.forEach((element) => {
        Utils.appearsOnScroll(element);
    });
    Utils.setMaxContent();
});