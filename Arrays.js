const numbers = new Array(1,2,3,4);

console.log(numbers);

const fruits = ['Apple','Orange', 'Pear'];
//console.log(fruits[1]);
fruits.push('Mango');
fruits.shift();  //Remove at the start
fruits.unshift('Guava');  //Insert at the start

console.log(fruits);
console.log(fruits.indexOf('Orange'));