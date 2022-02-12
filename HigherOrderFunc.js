"use strict";

const oneWord = function (str) {
  return str.replace(/ /g, "");
};

const upperFirstWord = function (str) {
  const [firstWord, ...restArray] = str.split(" ");

  return [firstWord.toUpperCase(), ...restArray].join(" ");
};

const transformer = function (str, fn) {
  //Higher order function
  console.log(`Transformed String: ${fn(str)}`);
};

transformer("This is a new string", upperFirstWord);
transformer("There Will Be No Spaces Here", oneWord);
