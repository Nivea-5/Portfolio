
/**
 * Permet de gérer le contenu du site, en transmettant le conenu de "content.json" dans la page web HTML.
 * Pour que cela fonctionne, il faut verifier les conditions suivantes :
 *  - le body du fichier HTML à pour ID le meme nom que celui indiqué dans content.json
 *  - chaque elements contenant le text voulu dans le fichier HTML à pour ID celui renseigné dans content.json
 */


//ouverture du fichier "content" contenant le contenu de la page web
let xhr = new XMLHttpRequest();
xhr.open("GET", "../content/content.json");
xhr.onload = function() {
  if (xhr.status === 200) {
    let content = JSON.parse(xhr.responseText);

    //on parcours les elements du json.
    //Pour chaque page décrite dans le json :
    for (let key in content) {

      //verifier que les propriétés ne sont pas définies par le prototype et que la propriété correspond à celle de la page actuelle
      if (content.hasOwnProperty(key) && document.getElementById(key)) {

        //pour chaque elements à afficher sur la page
        for (let id in content[key]) {

          //verifier que les propriétés ne sont pas définies par le prototype
          if (content.hasOwnProperty(key) && document.getElementById(id)) {

            if (Array.isArray(content[key][id])) {
              let text = "";
              for (let sentence in content[key][id]) {
                text += content[key][id][sentence] + "<br/> <br/>";
              }
              document.getElementById(id).innerHTML = text;
            } else if (typeof content[key][id] === 'string') {
              document.getElementById(id).innerHTML = content[key][id];
            }
          }
        }
      }
    }
  }
};
xhr.send();