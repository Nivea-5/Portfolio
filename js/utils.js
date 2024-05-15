class Utils {
  drawNavBar(selectedId) {
    fetch("../components/navbar.html")
      .then((response) => response.text())
      .then((data) => {
        // Insère le contenu dans le conteneur de la navbar
        let existingChild = document.querySelector("body").firstChild;
        let header = document.createElement("header");
        header.innerHTML = data;
        document.querySelector("body").insertBefore(header, existingChild);
        document
          .getElementById(selectedId || "accueil")
          .classList.add("selected");

        let menuBtn = document.createElement("div");
        menuBtn.classList.add("menu");
        let menuSpan1 = document.createElement("span");
        let menuSpan2 = document.createElement("span");
        let menuSpan3 = document.createElement("span");

        menuBtn.appendChild(menuSpan1);
        menuBtn.appendChild(menuSpan2);
        menuBtn.appendChild(menuSpan3);

        menuBtn.addEventListener("click", () => {
          if (
            document.querySelector("header").classList.contains("header-down")
          ) {
            document.querySelector("header").classList.remove("header-down");
            document.querySelector("body").classList.remove("background-moved");
            document
              .querySelector(".container")
              .classList.remove("container-hide");
            menuBtn.classList.remove("menu-down");
          } else {
            document.querySelector("header").classList.add("header-down");
            document.querySelector("body").classList.add("background-moved");
            document
              .querySelector(".container")
              .classList.add("container-hide");
            menuBtn.classList.add("menu-down");
          }
        });
        document.querySelector("body").insertBefore(menuBtn, existingChild);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite:", error);
      });
  }

  drawFooter() {
    fetch("../components/footer.html")
      .then((response) => response.text())
      .then((data) => {
        // Insère le contenu dans le conteneur de la navbar
        document.querySelector("footer").innerHTML = data;
      })
      .catch((error) => {
        console.error("Une erreur s'est produite:", error);
      });
  }

  drawPopUp(title, content, onActionButton, textButton) {
    fetch("../components/popup.html")
      .then((response) => response.text())
      .then((data) => {
        let popup = document.createElement("div");
        popup.classList.add("popup");
        popup.innerHTML = data;
        let closeBtn = popup.querySelector(".cross");
        popup.querySelector("h1").innerText = title || "Default Message";
        popup.querySelector("p").innerText =
          content || "You're seeing the default message for a popup window";
        popup.querySelector("a").innerText = textButton || "Contact support";

        document.querySelector("body").appendChild(popup);

        closeBtn.addEventListener("click", () => {
          popup.querySelector(".content").classList.add("content-closing");
          popup.querySelector(".popup-bg").classList.add("popup-bg-closing");
          setTimeout(
            () => document.querySelector("body").removeChild(popup),
            450
          );
        });
      })
      .catch((error) => {
        console.error("Une erreur s'est produite:", error);
      });
  }

  getContent(pageName) {
    return fetch("../content/" + pageName)
      .then((response) => response.text())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("Une erreur s'est produite:", error);
      });
  }

  /**
   * permet de determiner un element html est affiché sur l'ecran
   * @param {*} element
   * @returns un boulean indiquand si l'element est affiché
   */
  isOnScreen(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    return rect.bottom <= windowHeight + rect.height - 200;
  }

  /**
   * permet de faire une animation pour afficher un element à l'ecran, selon si il est censé etre affiché
   * Pour cela, ajoute la classe visible quand necessaire
   * @param {*} element
   */
  appearsOnScroll(element) {
    if (this.isOnScreen(element) && !element.classList.contains("visible")) {
      element.classList.add("visible");
    }
  }

  parseMarkdown(markdown) {
    const lines = markdown.split("\n");
    const sections = [];
    let currentSection = null;
    let currentParagraph = [];

    lines.forEach((line) => {
      line = line.trim();

      if (line.startsWith("# ")) {
        if (currentSection) {
          if (currentParagraph.length > 0) {
            currentSection.content.push({
              type: "text",
              data: currentParagraph.join(" "),
            });
            currentParagraph = [];
          }
          sections.push(currentSection);
        }
        currentSection = {
          title: line.replace("# ", ""),
          tags: [],
          content: [],
          summary: "",
        };
      } else if (line.startsWith("* ")) {
        if (currentSection) {
          currentSection.tags.push(line.replace("* ", ""));
        }
      } else if (line.startsWith("![")) {
        const imageMatch = line.match(/!\[.*?\]\((.*?)\)/);
        if (imageMatch && currentSection) {
          currentSection.content.push({
            type: "img",
            data: imageMatch[1].replace("../img/", ""),
          });
        }
      } else if (line.includes("_") || line.includes("*")) {
        const summaryMatch = line.match(/(?:\*|_)([^*_]+)(?:\*|_)/);
        if (summaryMatch && currentSection) {
          currentSection.summary = summaryMatch[1];
        }
      } else if (line) {
        currentParagraph.push(line);
      } else if (currentParagraph.length > 0) {
        if (currentSection) {
          currentSection.content.push({
            type: "text",
            data: currentParagraph.join(" "),
          });
          currentParagraph = [];
        }
      }
    });

    if (currentSection) {
      if (currentParagraph.length > 0) {
        currentSection.content.push({
          type: "text",
          data: currentParagraph.join(" "),
        });
      }
      sections.push(currentSection);
    }

    return sections;
  }
}

export default Utils;
