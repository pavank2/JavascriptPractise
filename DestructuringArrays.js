const [x, y, , z] = [1, 2, 3, 4, 5]; //Can also be used to return multiple values from functions

 console.log(x, y, z);

let [x1, y1, ...arr] = [1, 2, 3, 4, 5]; // Rest operator

// console.log(arr); //3,4,5

//Swap

//console.log(x1, y1);

[x1, y1] = [y1, x1];

//console.log(x1, y1);
