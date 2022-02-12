"use strict";

const add = function (a, b) {
  console.log(arguments);
  return a + b;
};

add(2, 4); //[Arguments] { '0': 2, '1': 4 }
add(2, 4, 5, 6); //[Arguments] { '0': 2, '1': 4, '2': 5, '3': 6 }

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 4);
addArrow(2, 4, 5, 6);
let a = 2;
let b = 3;
console.log(`Value of ${a}`, `Value of ${b}`);
