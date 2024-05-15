import Utils from "./utils.js";

const utils = new Utils();

utils.drawNavBar("projets");
utils.drawFooter();

function drawContentSummary(content, onClickAction) {
  fetch("../components/contentSummary.html")
    .then((response) => response.text())
    .then((data) => {
      let contentElem = document.createElement("div");
      contentElem.innerHTML = data;

      contentElem.classList.add("content-component-sum");
      contentElem.querySelector("h2").innerText = content.title || "Titre";
      contentElem.querySelector("p").innerText =
        content.summary ||
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.";
      content.tags.forEach((tag) => {
        let tagElem = document.createElement("span");
        tagElem.innerText = tag;
        contentElem.querySelector(".tags").appendChild(tagElem);
      });

      if (onClickAction) {
        contentElem.addEventListener("click", onClickAction);
      }

      document.querySelector("main").appendChild(contentElem);
    })
    .catch((error) => {
      console.error("Une erreur s'est produite:", error);
    });
}

function drawContent(content) {
  let contentElem = document.createElement("div");
  contentElem.classList.add("content-component");
  let backBtn = document.createElement("button");
  backBtn.classList.add("cross");
  backBtn.innerHTML =
    '<lord-icon src="https://cdn.lordicon.com/nqtddedc.json" trigger="hover" state="hover-cross-2" colors="primary:#000000"> </lord-icon>';

  let expandBtn = document.createElement("button");
  expandBtn.classList.add("expandBtn");
  expandBtn.innerHTML =
    ' <lord-icon src="https://cdn.lordicon.com/qzlhsleu.json"trigger="hover" colors="primary:#000000"></lord-icon>';

  let title = document.createElement("h1");
  title.innerText = content.title;
  contentElem.appendChild(title);

  let tags = document.createElement("div");
  tags.classList.add("tags");
  content.tags.forEach((tag) => {
    let span = document.createElement("span");
    span.innerText = tag;
    tags.appendChild(span);
  });
  contentElem.appendChild(tags);

  content.content.forEach((element) => {
    if (element.type == "text") {
      let p = document.createElement("p");
      p.innerHTML = element.data;
      contentElem.appendChild(p);
    } else if (element.type == "img") {
      let img = document.createElement("img");
      img.src = "../img/" + element.data;
      contentElem.appendChild(img);
    }
  });

  let bg = document.createElement("div");
  bg.classList.add("content-component-bg");

  expandBtn.addEventListener("click", () => {
    if (contentElem.classList.contains("expanded")) {
      contentElem.classList.remove("expanded");
      expandBtn.innerHTML =
        ' <lord-icon src="https://cdn.lordicon.com/qzlhsleu.json"trigger="hover" colors="primary:#000000"></lord-icon>';
    } else {
      contentElem.classList.add("expanded");
      expandBtn.innerHTML =
        ' <lord-icon src="https://cdn.lordicon.com/xdbaztkd.json"trigger="hover" colors="primary:#000000"></lord-icon>';
    }
  });

  bg.addEventListener("click", () => {
    contentElem.classList.add("content-component-closing");
    bg.classList.add("content-component-bg-closing");
    setTimeout(
      () => document.querySelector("body").removeChild(contentElem),
      250
    );
    setTimeout(() => document.querySelector("body").removeChild(bg), 250);

    document.querySelector(".container").classList.remove("smaller");
  });

  backBtn.addEventListener("click", () => {
    contentElem.classList.add("content-component-closing");
    bg.classList.add("content-component-bg-closing");
    setTimeout(
      () => document.querySelector("body").removeChild(contentElem),
      250
    );
    setTimeout(() => document.querySelector("body").removeChild(bg), 250);

    document.querySelector(".container").classList.remove("smaller");
  });

  contentElem.appendChild(backBtn);
  contentElem.appendChild(expandBtn);
  document.querySelector("body").appendChild(bg);
  document.querySelector("body").appendChild(contentElem);
  document.querySelector(".container").classList.add("smaller");
}

utils.getContent("projets.md").then((data) => {
  data = utils.parseMarkdown(data);


  data.forEach((element) => {
    drawContentSummary(element, () => drawContent(element));
  });
});
