//Immediately invoked function expression
//Anything defined in the function cannot be accessed outside
(function () {
  console.log("Hello World");
})();

(() => {
  console.log("Hello World");
})(); //Array IIFE
