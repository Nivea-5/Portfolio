import designer from "./designer.js";
import Utils from "./utils.js";

export default class Creator {
    
  static async createNavbar(selectedId) {
    let data = await Utils.getComponent("navbar.html")
        // Insère le contenu dans le conteneur de la navbar
        let header = document.createElement("header");
        header.innerHTML = data;
        if (selectedId) {
          header.querySelector("#"+selectedId).classList.add("selected");
        }

        let contactBtn = header.querySelector(".contact");
        contactBtn.addEventListener("click", () => {
          designer.drawPopUp(
            "Contactez moi !",
            "Mail : mael.garnier@etu.univ-grenoble-alpes.fr </br> Tel : +33 7 77 33 31 62"
          );
        });
        contactBtn.addEventListener("mouseover", () => {
          contactBtn
            .querySelector("lord-icon")
            .playerInstance.playFromBeginning();
        });
        return header;

  }

  static createMenuBtn(header) {
    let menuBtn = document.createElement("div");
    menuBtn.classList.add("menu");
    let menuSpan1 = document.createElement("span");
    let menuSpan2 = document.createElement("span");
    let menuSpan3 = document.createElement("span");

    menuBtn.appendChild(menuSpan1);
    menuBtn.appendChild(menuSpan2);
    menuBtn.appendChild(menuSpan3);

    menuBtn.addEventListener("click", () => {
      if (header.classList.contains("header-down")) {
        header.classList.remove("header-down");
        document.querySelector("body").classList.remove("background-moved");
        document.querySelector(".container").classList.remove("container-hide");
        menuBtn.classList.remove("menu-down");
      } else {
        header.classList.add("header-down");
        document.querySelector("body").classList.add("background-moved");
        document.querySelector(".container").classList.add("container-hide");
        menuBtn.classList.add("menu-down");
      }
    });

    return menuBtn;
  }

  static async createFooter() {
    let data = await Utils.getComponent("footer.html")

    let elem = document.createElement("footer");
    elem.innerHTML = data
    elem.querySelector(".contact").addEventListener("click", () => {
      designer.drawPopUp(
        "Contactez moi !",
        "Mail : mael.garnier@etu.univ-grenoble-alpes.fr </br> Tel : +33 7 77 33 31 62"
      );
    });
      
        return elem;

  }

  static async createSearch() {
    let data = await Utils.getComponent("search.html")
    
        let div = document.createElement("div");
        div.classList.add("search");
        div.innerHTML = data;

        div.querySelector(".search-box").addEventListener("click", () => {
          div.classList.add("search-expand");
        });

        div.querySelector(".search-box").addEventListener("mouseover", () => {
          div
            .querySelector(".search-box lord-icon")
            .playerInstance.playFromBeginning();
        });

        div.querySelector(".search-bg").addEventListener("click", () => {
          div.classList.remove("search-expand");
          div.querySelector(".search-result").innerHTML = "";
        });

        div.querySelector(".close-search").addEventListener("click", () => {
          div.classList.remove("search-expand");
            div.querySelector(".search-result").innerHTML = "";
            
        });

        div
          .querySelector(".search-box input")
          .addEventListener("keyup", async (e) => {
            let search = e.target.value.toLowerCase();
            search = search.split(" ");
            let result = await Utils.search(search);
            console.log(e.target.value.length);
            if (e.target.value.length <= 1) {
              div.querySelector(".search-result").innerHTML = "";
            } else if (result.length == 0) {
                div.querySelector(".search-result").innerHTML =
                "<h2>Aucun élèment de correspond à votre recherche</h2>";
            } else {
              div.querySelector(".search-result").innerHTML = "";
              for (const element of result) {
                designer.drawContentSummary(element.elem,() => designer.drawContent(element.elem),  ".search-result")
              }
            }
          });

        return div;
  }

  static async createPopup(title, content) {
    let data = await Utils.getComponent("popup.html")
        let popup = document.createElement("div");
        popup.classList.add("popup");
        popup.innerHTML = data;
        let closeBtn = popup.querySelector(".cross");
        popup.querySelector("h2").innerText = title || "Default Message";
        popup.querySelector("p").innerHTML =
          content || "You're seeing the default message for a popup window";

        closeBtn.addEventListener("click", () => {
          popup.querySelector(".content").classList.add("content-closing");
          popup.querySelector(".popup-bg").classList.add("popup-bg-closing");
          setTimeout(() => designer.removePopup(), 450);
        });
        return popup;
  }

  static async createContentSummary(content, onClickAction) {
    let data = await Utils.getComponent("contentSummary.html")
        let contentElem = document.createElement("div");
        contentElem.innerHTML = data;

        contentElem.classList.add("content-component-sum");
        contentElem.querySelector("h2").innerText = content.title || "Titre";
        let summary = content.summary || content.content[0].data;
        if (summary.length > 100) {
          summary = summary.substring(0, 100) + "...";
        }
        contentElem.querySelector("p").innerText = summary;
        content.tags.forEach((tag) => {
          let tagElem = document.createElement("span");
          tagElem.innerText = tag;
          contentElem.querySelector(".tags").appendChild(tagElem);
        });

        if (onClickAction) {
          contentElem.addEventListener("click", onClickAction);
        }

        return contentElem;

  }

  static async createContent(content) {
    let data = await Utils.getComponent("content.html")

        let contentElem = document.createElement("div");
        contentElem.id = content.title;
        contentElem.innerHTML = data;

        contentElem.querySelector("h1").innerText = content.title;

        content.tags.forEach((tag) => {
          let span = document.createElement("span");
          span.innerText = tag;
          contentElem.querySelector(".tags").appendChild(span);
        });

        content.content.forEach((element) => {
          if (element.type == "text") {
            let p = document.createElement("p");
            p.innerHTML = element.data;
            contentElem.querySelector(".content-component").appendChild(p);
          } else if (element.type == "img") {
            let img = document.createElement("img");
            img.src = "../img/" + element.data;
            contentElem.querySelector(".content-component").appendChild(img);
          }
        });

        let expandBtn = contentElem.querySelector(".expandBtn");
        expandBtn.addEventListener("click", () => {
          if (contentElem.querySelector(".content-component").classList.contains("expanded")) {
            contentElem.querySelector(".content-component").classList.remove("expanded");
            expandBtn.innerHTML =
              ' <lord-icon src="https://cdn.lordicon.com/qzlhsleu.json"trigger="hover" colors="primary:#000000"></lord-icon>';
          } else {
            contentElem.querySelector(".content-component").classList.add("expanded");
            expandBtn.innerHTML =
              ' <lord-icon src="https://cdn.lordicon.com/xdbaztkd.json"trigger="hover" colors="primary:#000000"></lord-icon>';
          }
        });

        contentElem.querySelector(".content-component-bg").addEventListener("click", () => {
            contentElem.querySelector(".content-component").classList.add("content-component-closing");
          contentElem.querySelector(".content-component-bg").classList.add("content-component-bg-closing");
          setTimeout(() => designer.removeContent(content.title), 250);
          document.querySelector(".container").classList.remove("smaller");

        });
        let backBtn = contentElem.querySelector(".cross");
        backBtn.addEventListener("click", () => {
            contentElem.querySelector(".content-component").classList.add("content-component-closing");
          contentElem.querySelector(".content-component-bg").classList.add("content-component-bg-closing");
          setTimeout(() => designer.removeContent(content.title), 250);
          document.querySelector(".container").classList.remove("smaller");

        });
        return contentElem
  }
}
