import designer from "./designer.js";
import Utils from "./utils.js";


let appearsOnScrollElements = document.querySelectorAll(".appearsOnScroll");

await designer.drawNavBar("competences");
await designer.drawFooter();

function drawSection(content) {
  let section = document.createElement("section");
  let mainDiv = document.createElement("div");
  let title = document.createElement("h2");
  title.innerText = content.title;
  mainDiv.appendChild(title);
  let tags = document.createElement("div");
  tags.classList.add("tags");
  content.tags.forEach((tag) => {
    let span = document.createElement("span");
    span.innerText = tag;
    tags.appendChild(span);
  });
  mainDiv.appendChild(tags);
  content.content.forEach((element) => {
    if (element.type === "text") {
      let desc = document.createElement("p");
      desc.innerHTML = element.data + "<br/> <br/>";
      mainDiv.appendChild(desc);
    } else if (element.type === "img") {
      let img = document.createElement("img");
      img.src = "../img/" + content.content[0].data;
      img.classList.add("appearsOnScroll");

      section.appendChild(img);
    }
  });

  section.appendChild(mainDiv);

  document.querySelector("main").appendChild(section);
}

Utils.getContent("competences.md").then((data) => {
  data = Utils.parseMarkdown(data);

  data.forEach((section) => {
    drawSection(section);
  });

  appearsOnScrollElements = document.querySelectorAll(".appearsOnScroll");
});

document.querySelector(".container").addEventListener("scroll", () => {
  appearsOnScrollElements.forEach((element) => {
    Utils.appearsOnScroll(element);
  });
  Utils.setMaxContent();
});
