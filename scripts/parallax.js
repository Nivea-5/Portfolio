
class Parallax {
    /**
     * permet de gerer la parallax pour un element html
     * ATTENTION incompatible avec appearsOnScroll à cause du délai d'animation (css) qui cause un décalage
     * @param {*} element l'element html
     * @param {*} direction up, down, left ou right selon la direction désirée
     * @param {*} speed la vitesse de déplacement de l'element. Par défaut 1.
     */
    move(element, direction, speed = 1) {
        speed = speed / 10;
        let scrollDifference = window.scrollY;
        if (direction == "up") {
            element.style.transform = `translate3d(0, ${scrollDifference * -speed}px, 0)`;
        } else if (direction == "down") {
            element.style.transform = `translate3d(0, ${scrollDifference * speed}px, 0)`;
        } else if (direction == "left") {
            element.style.transform = `translate3d(${scrollDifference * -speed}px, 0px, 0)`;
        } else if (direction == "right") {
            element.style.transform = `translate3d(${scrollDifference * speed}px, 0px, 0)`;
        }
    }
    /**
     * permet de determiner un element html est affiché sur l'ecran
     * @param {*} element 
     * @returns un boulean indiquand si l'element est affiché
     */
    isOnScreen(element) {
        
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        return (rect.bottom <= (windowHeight+rect.height-300));
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

export default Parallax;
