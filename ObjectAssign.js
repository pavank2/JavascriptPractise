"use strict";

const bella = {
  fname: "Bella",
  lname: "Johnson",
  age: 30,
};

let emma = bella;

emma.lname = "Williams"; //Changing the assigned object parameters changes the original object values too

console.log(bella.lname);

//Object assign - if you dont want the original values to change

const bella2 = {
  fname: "Bella",
  lname: "Johnson",
  age: 30,
};
let emma2 = Object.assign({}, bella2); // To copy the object into a totally new object

emma2.lname = "Williams";
console.log(bella2.lname); // Original object values don't change

//Note: Object.Assign works only on one level! If array or nested object is there, new copy is not created
