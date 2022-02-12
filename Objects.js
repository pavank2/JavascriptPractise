var readline = require("readline");

var myDog = {
  name: "Cake",
  legs: 4,
  tail: 1,
  friends: ["Jamy", "Chilli"],
};

console.log(myDog.legs);
console.log(myDog["name"]); //Different notations

myDog.name = "Pastry"; //Changing a property value

console.log(myDog.name);

const interestedIn = "name";

console.log(myDog[interestedIn]); //You have to use bracket notation if you use variables for properties

myDog.bark = "woof"; //Adding a new property

console.log(myDog);

delete myDog.bark;

console.log(myDog.hasOwnProperty("bark")); //Check for a property
