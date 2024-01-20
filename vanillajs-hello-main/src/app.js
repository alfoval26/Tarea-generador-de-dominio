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

  for (let A = 0; A < let1.length; A++) {
    for (let B = 0; B < let2.length; B++) {
      for (let C = 0; C < let3.length; C++) {
        combinaciones.push(let1[A] + let2[B] + let3[C] + ".com");
      }
    }
  }
  return combinaciones;
}

let combinaciones = DominiosDisponibles(pronoun, adj, noun);
for (let index = 0; index < combinaciones.length; index++) {
  console.log(combinaciones[index]);
}
