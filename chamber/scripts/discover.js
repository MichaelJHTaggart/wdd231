import places from "../data/places.mjs";

const container = document.querySelector("#discover-cards");
const imageBase = "./images/discover/";

places.forEach((place) => {
  const card = document.createElement("article");
  card.className = "discover-card";

  const title = document.createElement("h2");
  title.className = "discover-card-title";
  title.textContent = place.name;

  const figure = document.createElement("figure");
  figure.className = "discover-card-figure";
  const img = document.createElement("img");
  img.src = `${imageBase}${place.imageFile}`;
  img.alt = place.name;
  img.loading = "lazy";
  img.width = 400;
  img.height = 225;
  figure.appendChild(img);

  const addressElement = document.createElement("address");
  addressElement.className = "discover-card-address";
  addressElement.textContent = place.address;

  const descriptionElement = document.createElement("p");
  descriptionElement.className = "discover-card-description";
  descriptionElement.textContent = place.description;

  const link = document.createElement("a");
  link.href = place.website;
  link.textContent = "Learn more";
  link.className = "learn-more discover-card-link";
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  card.appendChild(title);
  card.appendChild(figure);
  card.appendChild(addressElement);
  card.appendChild(descriptionElement);
  card.appendChild(link);
  container.appendChild(card);
});
