import Utils from "./utils.js"

const utils = new Utils();

utils.drawNavBar("competences");
utils.drawFooter();

const appearsOnScrollElements = document.querySelectorAll(".appearsOnScroll");

document.querySelector(".container").addEventListener("scroll", () => {
    appearsOnScrollElements.forEach((element) => {
        utils.appearsOnScroll(element);
    });
});


