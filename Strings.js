let s = "Hello World Hello";

console.log(s.length);

console.log(s.substring(0, 2).toUpperCase());

console.log(s[0]);

console.log(s.slice(-2)); //ld

console.log(s.slice(1, -2)); //ello Wor

let s2 = s.replace(/Hello/g, "hola");

console.log(s2);

//Others - includes, startsWith

//split

const [greet1, greet2, greet3] = s.split(" ");

console.log(greet1, greet2, greet3);

const newGreeting = [greet1, greet2, greet3.toUpperCase()].join(" ");

console.log(newGreeting);
