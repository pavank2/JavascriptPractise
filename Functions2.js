"use strict";

const greet = function (name) {
  return function (greeting) {
    console.log(`Hi ${name},${greeting}`); //Able to access name because of closures!
  };
};

const greeterHi = greet("Jonas"); // return and assign function to greeterHi
greeterHi("Good morning"); //Now call greeterHi
greeterHi("Good evening");

greet("Hello")("Good night"); //This works too!
