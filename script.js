let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let message = document.getElementById('message');


function addCom() {
  let newDiv = document.createElement("div"); // crée un nouvel élément div
  newDiv.className = "flex space-x-4 text-sm text-gray-500"; //ajout d'une class à la div créée
  document.getElementById("comment-list").appendChild(newDiv); // ajoute le nouvel élément créé et son contenu dans le DOM  
  let newDiv1 = document.createElement("div"); // crée un nouvel élément div
  newDiv1.className = "flex-1 py-10 border-t border-gray-200"; //ajout d'une class à la div créée
  newDiv.appendChild(newDiv1);
  
  let newH3 = document.createElement("h3"); // crée un nouvel élément H3
  newH3.className = "font-medium text-gray-900"; //ajout d'une class au H créée
  let newContentH3 = document.createTextNode(firstName.value+" "+lastName.value); // et lui donne un peu de contenu  
  newH3.appendChild(newContentH3);
  newDiv1.appendChild(newH3);
  
  let newDiv2 = document.createElement("div"); // crée un nouvel élément div
  newDiv2.className = "prose prose-sm mt-4 max-w-none text-gray-500"; //ajout d'une class à la div créée
  let newP = document.createElement("p"); // crée un nouvel élément p
  let newContentP = document.createTextNode(message.value); // et lui donne un peu de contenu  
  newDiv1.appendChild(newDiv2);
  newP.appendChild(newContentP); // ajoute le nœud texte au nouveau div créé.
  newDiv2.appendChild(newP);
};

document.querySelector('button').addEventListener('click', function (event) {
  event.preventDefault()
if (firstName.value.length === 0){document.getElementById('error-message').removeAttribute('style')}
  else if(lastName.value.length === 0){document.getElementById('error-message').removeAttribute('style')}
  else if(message.value.length === 0){document.getElementById('error-message').removeAttribute('style')}
  else{
  document.getElementById('error-message').style ='display: none;';
  addCom();
  firstName.value="";
  lastName.value="";
  message.value="";
}
});