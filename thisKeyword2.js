"use strict";
// var firstName = "Matilda";
// const jonas = {
//   firstName: "Jonas",
//   year: 1991,
//   calcAge: function () {
//     console.log(2037 - this.year);
//   },

//   greet: () => console.log(`Hi ${this.firstName}`), //undefined as arrow key scope is global now.
//   //Dont use array functions as methods
// };

// jonas.greet(); // undefined, but why is it undefined after adding firstName matilda?
// console.log(this.firstName); //undefined

//Next scenario - function inside a method

const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);

    //const self= this here to solve this using scope chaining. Self points to Jonas.
    //ES6 solution is to use Arrow function as it automatically points to parent scope
    const isMillenial = function () {
      //function inside calcAge method
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  greet: () => console.log(`Hi ${this.firstName}`),
};

jonas.calcAge(); //Undefined this keyword for isMillenial as it is a regular function, even though inside a method/object
