import { cardComponents } from "./cardComponents.js";
import { product } from "../data/product.js";

let cardContainer = document.querySelector("#cardComponents");
const BASE_URL = "http://127.0.0.1:5500/renderProducts/data/data.json";

fetch(BASE_URL).then((res)=> res.json()).then((data)=> {data.map((product)=>{
  let newCard = cardComponents(product);
  cardContainer.innerHTML += newCard;
})});

// product.forEach((product) => {
//   let newCard = cardComponents(product);
//   cardContainer.innerHTML += newCard;
// });
