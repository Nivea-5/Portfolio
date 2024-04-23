import Utils from "./utils.js"

const utils = new Utils();

let appearsOnScrollElements = document.querySelectorAll(".appearsOnScroll");

utils.drawNavBar("competences");
utils.drawFooter();

function drawSection(content) {
    let section = document.createElement("section");

    let img = document.createElement("img");
    img.src = "../img/" + content.img;
    img.classList.add("appearsOnScroll");

    let mainDiv = document.createElement("div");
    
    let title = document.createElement("h2");
    title.innerText = content.title;

    let tags = document.createElement("div");
    tags.classList.add("tags");
    content.tags.forEach(tag => {
        let span = document.createElement("span");
        span.innerText = tag;
        tags.appendChild(span);
    });

    let desc = document.createElement("p");
    desc.innerText = content.description;

    mainDiv.appendChild(title);
    mainDiv.appendChild(tags)
    mainDiv.appendChild(desc);

    section.appendChild(img);
    section.appendChild(mainDiv);

    document.querySelector("main").appendChild(section);
}

utils.getContent("competences").then(data => {
    data = JSON.parse(data);

    data.forEach(section => {
        drawSection(section);
    });

    appearsOnScrollElements = document.querySelectorAll(".appearsOnScroll");
})


document.querySelector(".container").addEventListener("scroll", () => {
    appearsOnScrollElements.forEach((element) => {
        utils.appearsOnScroll(element);
    });
});


