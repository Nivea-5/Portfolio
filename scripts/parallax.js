function parallax(element, direction, speed) {
    speed = speed/10;
    var scrollY = window.scrollY;
    if (direction == "up") {
        element.style.transform = `translate3d(0, ${scrollY * -speed}px, 0)`;
    } else if (direction == "down") {
        element.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
    } else if (direction == "left") {
        element.style.transform = `translate3d(${scrollY * -speed}px, 0px, 0)`;
    } else if (direction == "right") {
        element.style.transform = `translate3d(${scrollY * speed}px, 0px, 0)`;
    }
}
function appearsOnScroll(element) {
    element.style.opacity = 100-(Math.abs((element.getBoundingClientRect().top- element.clientHeight) / (window.innerHeight))*150)+ "%";
}

function carrouselOnScroll(element) {
    var ratio = .2;
    var scaleValue = 1 - (Math.abs((element.getBoundingClientRect().top- (element.clientHeight/1.5)) / window.innerHeight) * ratio);
    scaleValue = Math.max(0, Math.min(1, scaleValue));

    element.style.transform = "scale(" + scaleValue + ")";
}

var main = document.querySelector("main");

var parallaxElem = document.querySelectorAll(".parallax");

window.addEventListener("scroll", function() {
    console.log(parallaxElem);
    parallaxElem.forEach(function(element, index) {
        console.log("test");
        if (element.classList.contains("p-up")) {
            parallax(element, "up", 1);
        }
        if (element.classList.contains("p-down")) {
            parallax(element, "down", 1);
        }
        if (element.classList.contains("p-left")) {
            parallax(element, "left", 1);
        }
        if (element.classList.contains("p-right")) {
            parallax(element, "right", 1);
        }
        if (element.classList.contains("scroll-appears")) {
            appearsOnScroll(element);
        }
        if (element.classList.contains("scroll-carrousel")) {
            carrouselOnScroll(element);
        }
    });
    
    

    /*
    if (ratio<0.350) {
        main.style.backdropFilter = "blur("+ratio*20+"px)";
    } else {
        main.style.backdropFilter = "blur(8px)";
    }
    */


});