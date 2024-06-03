import { cardComponents } from "./cardComponents.js";
import { product } from "../data/product.js";

let cardContainer = document.querySelector("#cardComponents");

product.forEach((product) => {
  let newCard = cardComponents(product);
  cardContainer.innerHTML += newCard;
});
