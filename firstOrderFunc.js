const firstOrderFunc = () => console.log ('Hello, I am a First order function');
const higherOrder = varReturnFirstOrder => varReturnFirstOrder();
higherOrder(firstOrderFunc);