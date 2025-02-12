
/**
 * classe représentant un element à afficher à l'ecran
 */

class Element {

    #id;

    #title;

    #tags;

    #imgSrc;

    #content;

    /**
     * constructeur de la class
     * @param {*} element le contenu de l'element au format html
     */

    constructor(element) {
        this.#id = element.id;
        this.#title = element.title;
        this.#tags = element.tags;
        this.#imgSrc = element.imageSrc;
        this.#content = element.content;
        console.log(element);
    }

    /**
     * retourne l'element html contenant toutes les infos de l'element
     * @returns un element html de type section
     */
    getDisplayable() {

        //section parent de l'element
        let sectionElement = document.createElement('section');
        sectionElement.setAttribute('class', this.#id + ' parallax scroll-appears');

        //titre de la section
        let titleElement = document.createElement('h1');
        titleElement.innerText = this.#title;
        titleElement.setAttribute('class', 'title-small');
        sectionElement.appendChild(titleElement);

        //div avec le contenu
        let divElement = document.createElement('div');

        //image
        if (this.#imgSrc != "") {
            let imgElement = document.createElement('img');
            imgElement.setAttribute('src', '../'+this.#imgSrc);
            imgElement.setAttribute('alt', 'img' + this.#id);
            divElement.appendChild(imgElement);
        }

        //tags
        /*
        this.#tags.forEach(element => {
            let tagElement = document.createElement('p');
            tagElement.setAttribute('class', 'tag');
            divElement.appendChild(tagElement);
        });
        */

        //contenu texte
        //si le contenu est constitué d'une liste de texte, on ajoute un br entre chaque element pour un retour à la ligne
        let pElement = document.createElement('p');
        if (typeof this.#content === 'object') {
            let text = "";
            for (let sentence in this.#content) {
            text += this.#content[sentence] + "<br/> <br/>";
            }
            pElement.innerHTML = text;
        } else if (typeof this.#content === 'string') {
            pElement.innerText = this.#content;
        }
        divElement.appendChild(pElement);

        sectionElement.appendChild(divElement);
        return sectionElement;
    }
}

export default Element;