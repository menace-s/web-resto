import roti from '../image/roti.jpg'
import salade from '../image/salade.jpg'
import spa from '../image/spa.jpg'
export const plats = [
  {
    titre: "Poulet rôti aux herbes",
    description:
      "Un délicieux plat de poulet rôti lentement avec un mélange d'herbes aromatiques, accompagné de légumes grillés et de pommes de terre rôties.",
    src: `${roti}`,
  },
  {
    titre: "Pâtes Carbonara",
    description:
      "Des pâtes al dente mélangées à une sauce crémeuse à base d'œufs, de pancetta, de parmesan et de poivre noir fraîchement moulu.",
    src: `${spa}`,
  },
  {
    titre: "Salade de quinoa aux légumes",
    description:
      "Une salade légère et nutritive composée de quinoa cuit, de légumes frais comme les tomates, les concombres et les poivrons, et assaisonnée d'une vinaigrette à l'huile d'olive et au citron.",
    src: `${salade}`,
  },
];
export function displayMenu(plats) {
  // Effacer le contenu précédent
  content.textContent = "";

  // Création du conteneur parent
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("cardContainer");

  // Parcourir les plats et créer une carte pour chaque plat
  for (const plat of plats) {
    // Création de la carte
    const card = document.createElement("div");
    card.classList.add("card");

    // Création de la div contenant l'image
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("imgContainer");

    // Création de l'image et attribution de la source
    const img = document.createElement("img");
    img.setAttribute("src", plat.src); // Assurez-vous que chaque plat a une propriété "src"

    //
    const h2elmt = document.createElement("h2");
    h2elmt.textContent = plat.titre;

    //Création de p
    const pelmt = document.createElement("p");
    pelmt.textContent = plat.description;
    pelmt.classList.add("pelmt")
    // Création du conteneur de texte
    const textContainer = document.createElement("div");
    textContainer.classList.add("textContainer");

    // Ajout de l'image au conteneur d'image
    imgContainer.appendChild(img);

    textContainer.appendChild(h2elmt);
    textContainer.appendChild(pelmt)

    // Ajout du conteneur d'image à la carte
    card.appendChild(imgContainer);
    card.appendChild(textContainer);

    // Ajout de la carte au conteneur principal
    cardContainer.appendChild(card);
  }

  // Ajout du conteneur principal au contenu
  content.appendChild(cardContainer);
}
