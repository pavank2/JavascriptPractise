var first = "abc";
var second = "cda";

var a = first.toLowerCase().split("").sort().join("");

var b = second.toLowerCase().split("").sort().join("");

console.log(a === b);
