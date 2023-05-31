// CREER UN ARRIERE PLAN ALEATOIRE :

    // Créer un tableau avec les noms des classes
    var classes = ["bg-image-1", "bg-image-2", "bg-image-3", "bg-image-4", "bg-image-5", "bg-image-6", "bg-image-7", "bg-image-8"];



    // Définir une fonction qui change aléatoirement la classe de la div
    function changerClasse() {
      // Générer un nombre aléatoire entre 0 et la longueur du tableau - 1
      var index = Math.floor(Math.random() * classes.length);
      // Ajouter la classe correspondant à l'index au attribut class de la div
      landing.classList.add(classes[index]);
    }
      // Appeler la fonction quand on clique sur la div
      window.addEventListener("load", changerClasse);


//CREER UN EFFET DE PARALLAX :

    // Page d'accueil
    var landing = document.querySelector(".landing");
    var landingH101 = document.querySelector(".landingH101");
    var landingH102 = document.querySelector(".landingH102");
    var landingH2 = document.querySelector(".landingH2");

    // me conaitre
    var knowMe = document.querySelector(".knowMe");
    var knowMeW1 = document.querySelector(".knowMeW1");
    var knowMeW2 = document.querySelector(".knowMeW2");
    var knowMePP = document.querySelector(".knowMePP");
    var knowMePPB = document.querySelector(".knowMePP .imgBlob");
    var knowMeTextB = document.querySelector(".knowMe .textBlob");

    // mes projets
    var project = document.querySelector(".project");
    var projectW3 = document.querySelector(".projectW3");
    var projectW4 = document.querySelector(".projectW4");
    var projectIMG = document.querySelector(".projectIMG");
    var projectIMGB = document.querySelector(".projectIMG .imgBlob");
    var projectTextB = document.querySelector(".project .textBlob");

    // me contacter
    var contact = document.querySelector(".contact");
    var contactW5 = document.querySelector(".contactW5");
    var contactW6 = document.querySelector(".contactW6");
    var contactIMG = document.querySelector(".contactIMG");
    var contactIMGB = document.querySelector(".contactIMG .imgBlob");
    var contactTextB = document.querySelector(".contact .textBlob");

    window.addEventListener("scroll", function() {

      // Calculer le ratio entre la position du scroll et la hauteur du document
      var ratio = window.scrollY / document.body.scrollHeight;

      //parallax elements accueil
      landing.style.opacity = 1 - ratio*6;
      landingH101.style.marginTop = ratio*-1000 + "px";
      landingH102.style.marginTop = ratio*-2000 + "px";
      landingH2.style.marginTop = ratio*-3000 + "px";
      landing.style.backgroundPosition = "0px " + ratio*1000 + "px";
      
      //parallax elements a propos de moi
      knowMeW1.style.marginTop = ratio*-1000 + "px";
      knowMeW2.style.marginTop = ratio*-2000 + "px";
      knowMePP.style.marginTop = ratio*-1000 + "px";
      knowMePPB.style.marginTop = ratio*300 + "px";
      knowMeTextB.style.marginTop = ratio*-200 + "px";
      
      knowMeW1.style.opacity = 1 - ratio*6 +1.7;
      knowMeW2.style.opacity = 1 - ratio*6 +1.7;

      //parallax elements me connaitre
      projectW3.style.marginTop = ratio*-1000 + "px";
      projectW4.style.marginTop = ratio*-2000 + "px";
      projectIMG.style.marginTop = ratio*-1000 + "px";
      projectIMGB.style.marginTop = ratio*300 + "px";
      projectTextB.style.marginTop = ratio*-200 + "px";
      
      projectW3.style.opacity = 1 - ratio*6 +3;
      projectW4.style.opacity = 1 - ratio*6 +3;

      //parallax elements me connaitre
      contactW5.style.marginTop = ratio*-1000 + "px";
      contactW6.style.marginTop = ratio*-2000 + "px";
      contactIMG.style.marginTop = ratio*-1000 + "px";
      contactIMGB.style.marginTop = ratio*300 + "px";
      contactTextB.style.marginTop = ratio*-200 + "px";
    });
    

