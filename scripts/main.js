import View, {updateView} from "./view.js";
import Parallax from './parallax.js';
import Element from "./element.js";

/**
 * Permet de gerer les elements affichés à l'ecran 
 */


/**
 * gestion du contenu
 * ouverture du fichier "content" au format json,
 * conversion des element de fichier en objet "Element",
 * ajout de ces objets à l'html
 */
let xhr = new XMLHttpRequest();
xhr.open("GET", "../content/content.json");
xhr.onload = function() {
    if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        //on parcours les elements du json.
        //Pour chaque page décrite dans le json :
        for (let page in data) {
            //verifier que les propriétés ne sont pas définies par le prototype et que la propriété correspond à celle de la page actuelle
            if (data.hasOwnProperty(page) && document.getElementById(page)) {
                //pour chaque elements (section) à afficher sur la page
                for (let section in data[page]) {
                    //verifier que les propriétés ne sont pas définies par le prototype
                    let element = new Element(data[page][section]);
                    document.getElementById(page).appendChild(element.getDisplayable());
                    updateView();
                }
            }
        }
    }
};
xhr.send();


const parallax = new Parallax();



/**
 * gestion du clic sur le menu "hamburger"
 */
View.hamburgerButton.addEventListener("click", () => {
    if (View.nav.classList.contains("nav-expand")) {
        View.nav.classList.remove("nav-expand");
        View.hamburgerButton.classList.remove("hamburger-open");
    } else {
        View.nav.classList.add("nav-expand");
        View.hamburgerButton.classList.add("hamburger-open");
    }
    
});

/**
 * gestion du scroll pour la parallax
 */
window.addEventListener("scroll", function() {
    //gestion de la parallax
    View.parallaxElem.forEach(function(element, index) {
        if (element.classList.contains("up")) {
            parallax.move(element, "up", 1);
        }
        if (element.classList.contains("down")) {
            parallax.move(element, "down", 1);
        }
        if (element.classList.contains("left")) {
            parallax.move(element, "left", 1);
        }
        if (element.classList.contains("right")) {
            parallax.move(element, "right", 1);
        }
        if (element.classList.contains("scroll-appears")) {
            parallax.appearsOnScroll(element);
        }
    });    
    
    //gestion de l'affichage progressif au scroll
    if (this.window.scrollY<150) {
        if (View.background.classList.contains("background-scrolled")) {
            View.background.classList.remove("background-scrolled");
        }    } else {
        if (!View.background.classList.contains("background-scrolled")) {
            View.background.classList.add("background-scrolled");
        }
    }
    
    //animation de l'arrière plan quand l'utilisateur commence à scroller
    if (window.innerWidth <= 800) {
        window.addEventListener("scroll", function() {
            if (this.window.scrollY<150) {
                if (Viewbody.classList.contains("scrolled")) {
                    View.body.classList.remove("scrolled");
                }    } else {
                if (!View.body.classList.contains("scrolled")) {
                    View.body.classList.add("scrolled");
                }
            }
        })
    }

});

