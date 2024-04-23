
class Utils {

    drawNavBar(selectedId)
    {
    
        fetch('../components/navbar.html')
            .then(response => response.text())
            .then(data => {
                // Insère le contenu dans le conteneur de la navbar
                let existingChild = document.querySelector('body').firstChild;
                let header = document.createElement("header");
                header.innerHTML = data;
                document.querySelector('body').insertBefore(header, existingChild);
                document.getElementById(selectedId || "accueil").classList.add("selected")

                let menuBtn = document.createElement("div");
                menuBtn.classList.add("menu");
                let menuSpan1 = document.createElement("span");
                let menuSpan2 = document.createElement("span");
                let menuSpan3 = document.createElement("span");

                menuBtn.appendChild(menuSpan1);
                menuBtn.appendChild(menuSpan2);
                menuBtn.appendChild(menuSpan3);

                menuBtn.addEventListener("click", () => {
                    if (document.querySelector("header").classList.contains("header-down")) {
                        document.querySelector("header").classList.remove("header-down");
                        document.querySelector("body").classList.remove("background-moved");
                        document.querySelector(".container").classList.remove("container-hide");
                        menuBtn.classList.remove("menu-down")
                    } else {
                        document.querySelector("header").classList.add("header-down");
                        document.querySelector("body").classList.add("background-moved");
                        document.querySelector(".container").classList.add("container-hide");
                        menuBtn.classList.add("menu-down")
                    }
                })
                document.querySelector('body').insertBefore(menuBtn, existingChild);

            })
            .catch(error => {
                console.error('Une erreur s\'est produite:', error);
            });
    }
    
    drawFooter()
    {
    
        fetch('../components/footer.html')
            .then(response => response.text())
            .then(data => {
                // Insère le contenu dans le conteneur de la navbar
                document.querySelector('footer').innerHTML = data;
            })
            .catch(error => {
                console.error('Une erreur s\'est produite:', error);
            });
    }
    
    drawPopUp(title, content, onActionButton, textButton)
    {
        fetch('../components/popup.html')
            .then(response => response.text())
            .then(data => {
                let popup = document.createElement("div");
                popup.classList.add("popup");   
                popup.innerHTML = data;
                let closeBtn = popup.querySelector(".cross");
                popup.querySelector("h1").innerText = title || "Default Message";
                popup.querySelector("p").innerText = content || "You're seeing the default message for a popup window";
                popup.querySelector("a").innerText = textButton || "Contact support";
                
                document.querySelector('body').appendChild(popup);
    
                closeBtn.addEventListener("click", () => {
                    popup.querySelector('.content').classList.add("content-closing");
                    popup.querySelector('.popup-bg').classList.add("popup-bg-closing");
                    setTimeout(() => document.querySelector('body').removeChild(popup), 450);
                })
                
            })
            .catch(error => {
                console.error('Une erreur s\'est produite:', error);
            });
    }

    drawContentSummary(content, onClickAction)
    {
    
        fetch('../components/contentSummary.html')
            .then(response => response.text())
            .then(data => {
                let contentElem = document.createElement("div");
                contentElem.innerHTML = data;

                contentElem.classList.add("content-component-sum");
                contentElem.querySelector("h2").innerText = content.title || "Titre";
                contentElem.querySelector("p").innerText = content.text || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.";
                content.tags.forEach(tag => {
                    let tagElem = document.createElement("span");
                    tagElem.innerText = tag;
                    contentElem.querySelector(".tags").appendChild(tagElem);
                });

                if (onClickAction) {
                    contentElem.addEventListener("click", onClickAction);
                }

                document.querySelector('main').appendChild(contentElem);
            })
            .catch(error => {
                console.error('Une erreur s\'est produite:', error);
            });
    }


    drawContent(content)
    {
    
        let contentElem = document.createElement("div");
        contentElem.classList.add("content-component");
        let backBtn = document.createElement("button");
        backBtn.classList.add("cross");
        backBtn.innerHTML = "<lord-icon src=\"https://cdn.lordicon.com/nqtddedc.json\" trigger=\"hover\" state=\"hover-cross-2\" colors=\"primary:#000000\"> </lord-icon>"

        let expandBtn = document.createElement("button");
        expandBtn.classList.add("expandBtn");
        expandBtn.innerHTML = " <lord-icon src=\"https://cdn.lordicon.com/qzlhsleu.json\"trigger=\"hover\" colors=\"primary:#000000\"></lord-icon>"
        
        let title =document.createElement("h1");
        title.innerText = content.title;
        contentElem.appendChild(title);
        
        let tags = document.createElement("div");
        tags.classList.add("tags");
        content.tags.forEach(tag => {
            let span = document.createElement("span");
            span.innerText = tag;
            tags.appendChild(span);
        });
        contentElem.appendChild(tags);

        content.content.forEach(element => {
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
                expandBtn.innerHTML = " <lord-icon src=\"https://cdn.lordicon.com/qzlhsleu.json\"trigger=\"hover\" colors=\"primary:#000000\"></lord-icon>"
            } else {
                contentElem.classList.add("expanded");
                expandBtn.innerHTML = " <lord-icon src=\"https://cdn.lordicon.com/xdbaztkd.json\"trigger=\"hover\" colors=\"primary:#000000\"></lord-icon>"
            }
        })

        bg.addEventListener("click", () => {
            contentElem.classList.add("content-component-closing");
            bg.classList.add("content-component-bg-closing");
            setTimeout(() => document.querySelector("body").removeChild(contentElem), 250);
            setTimeout(() => document.querySelector("body").removeChild(bg), 250);

            document.querySelector(".container").classList.remove("smaller");
        }) 

        backBtn.addEventListener("click", () => {

            contentElem.classList.add("content-component-closing");
            bg.classList.add("content-component-bg-closing");
            setTimeout(() => document.querySelector("body").removeChild(contentElem), 250);
            setTimeout(() => document.querySelector("body").removeChild(bg), 250);

            document.querySelector(".container").classList.remove("smaller");
        })

        contentElem.appendChild(backBtn);
        contentElem.appendChild(expandBtn);
        document.querySelector("body").appendChild(bg);
        document.querySelector("body").appendChild(contentElem);
        document.querySelector(".container").classList.add("smaller");
    }

    getContent(pageName)
    {
        return fetch('../content/'+ pageName +'.json')
            .then(response => response.text())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.error('Une erreur s\'est produite:', error);
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
  
  
}

export default Utils;
