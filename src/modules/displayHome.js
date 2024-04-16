import platAccueil from '../image/platAccueil1.png'
export function displayHome() {
  const content = document.getElementById("content");
  content.textContent=" "
  //creation des deux divs principales
  const contentText = document.createElement("div");
  const contentImg = document.createElement("div");
  const img=document.createElement("img");

// Création des éléments
const h1Element = document.createElement("h1");
const spanElement1 = document.createElement("span");
const spanElement2 = document.createElement("span");

// Ajout de texte aux éléments
const text1 = document.createTextNode("Ce n'est pas seulement de la ");
const text2 = document.createTextNode("nourriture");
const text3 = document.createTextNode("c'est une ");
const text4 = document.createTextNode("Expérience");
const text5 = document.createTextNode(".");

//ajout attribut
img.src= platAccueil;
img.setAttribute("alt","image de plat de riz");

// Ajout de texte aux spans
spanElement1.appendChild(text2);
spanElement2.appendChild(text4);

// Ajout des spans dans le h1
h1Element.appendChild(text1);
h1Element.appendChild(spanElement1);
h1Element.appendChild(document.createTextNode(" "));
h1Element.appendChild(text3);
h1Element.appendChild(spanElement2);
h1Element.appendChild(text5)

  
  //attribution des classes
  contentText.classList.add("content-text");
  contentImg.classList.add("content-img");
  //ajout dans le DOM
  contentText.appendChild(h1Element);
  contentImg.appendChild(img)
  content.appendChild(contentText);
  content.appendChild(contentImg)
}
