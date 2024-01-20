/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

function DominiosDisponibles(let1, let2, let3) {
  let combinaciones = [];

  for (let index = 0; index < let1.length; index++) {
    for (let index = 0; index < let1.length; index++) {
      for (let index = 0; index < let1.length; index++) {
        combinaciones.push(let1[index] + let2[index] + let3[index] + ".com");
      }
    }
  }
  return combinaciones;
}

let combinaciones = DominiosDisponibles(pronoun, adj, noun);
for (let index = 0; index < combinaciones.length; index++) {
  console.log(combinaciones[index]);
}
