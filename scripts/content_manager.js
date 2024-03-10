
/**
 * Permet de gérer le contenu du site, en transmettant le conenu de "content.json" dans la page web HTML.
 * Pour que cela fonctionne, il faut verifier les conditions suivantes :
 *  - le body du fichier HTML à pour ID le meme nom que celui indiqué dans content.json
 *  - chaque elements contenant le text voulu dans le fichier HTML à pour ID celui renseigné dans content.json
 */

let xhr = new XMLHttpRequest();
xhr.open("GET", "../content/content.json");
xhr.onload = function() {
  if (xhr.status === 200) {
    let content = JSON.parse(xhr.responseText);



    for (let key in content) {

        //verifier que les propriétés ne sont pas définies par le prototype
        if (content.hasOwnProperty(key) && document.getElementById(key)) {

            for (let id in content[key]) {

                //verifier que les propriétés ne sont pas définies par le prototype
                if (content.hasOwnProperty(key) && document.getElementById(id)) {
        
                    //ajout du contenu
                    document.getElementById(id).innerHTML = content[key][id];

                }
            }
        }
    }
  }
};
xhr.send();