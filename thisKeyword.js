"use strict";
console.log(this);

// Regular function
const calcAge = function (birthyear) {
  console.log(2037 - birthyear);
  console.log(this); //undefined
};

calcAge(1991);

//Arrow function
const calcAgeArrow = (birthyear) => {
  console.log(2037 - birthyear);
  console.log(this); //Arrow function uses this keyword of the parent scope
};

calcAgeArrow(1991);

//Inside a method
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); //Entire object
    console.log(2037 - this.year);
  },
};

jonas.calcAge(); //1991

//Method borrowing

const matilda = {
  year: 2007,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge(); //this points to matilda , which is the object calling the method

//Assigning to regular function

const f = jonas.calcAge;
f(); //this.year undefined as there is no object
