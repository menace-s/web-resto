import chef from '../image/chef.jpg';
import restaurant from '../image/restaurant.jpg';
import team from '../image/team.jpg';

export const aboutInfo = [
  {
    titre: "Notre Chef",
    description: "Rencontrez notre chef de renommée mondiale, avec plus de 20 ans d'expérience dans la cuisine gastronomique.",
    src: `${chef}`,
  },
  {
    titre: "Le Restaurant",
    description: "Découvrez l'ambiance chaleureuse et accueillante de notre restaurant, parfait pour des dîners en famille ou des événements spéciaux.",
    src: `${restaurant}`,
  },
  {
    titre: "Notre Équipe",
    description: "Une équipe dévouée et passionnée, prête à vous offrir une expérience culinaire inoubliable.",
    src: `${team}`,
  },
];

export function displayAbout(info) {

  content.textContent = "";

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("cardContainer");

  for (const item of info) {
    const card = document.createElement("div");
    card.classList.add("card");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("imgContainer");

    const img = document.createElement("img");
    img.setAttribute("src", item.src);

    const h2elmt = document.createElement("h2");
    h2elmt.textContent = item.titre;

    const pelmt = document.createElement("p");
    pelmt.textContent = item.description;
    pelmt.classList.add("pelmt");

    const textContainer = document.createElement("div");
    textContainer.classList.add("textContainer");

    imgContainer.appendChild(img);
    textContainer.appendChild(h2elmt);
    textContainer.appendChild(pelmt);

    card.appendChild(imgContainer);
    card.appendChild(textContainer);

    cardContainer.appendChild(card);
  }

  content.appendChild(cardContainer);
}

displayAbout(aboutInfo);
