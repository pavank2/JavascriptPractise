const jonas = {
  fname: "Jonas",
  birthyear: "1991",
  friends: ["Michael", "John", "Ted"],
  calcAge: function () {
    //This is object method
    this.age = 2037 - this.birthyear; //Added new object field
    return this.age; // this points to object which calls it i.e. jonas
  },
};

const getSummary = function () {
  //This is a function expression
  return `Name is ${jonas.fname}`;
};

console.log(jonas.calcAge());
console.log(jonas.age); //Age gets assigned after first call to calcAge
console.log(jonas["calcAge"]()); //this works too
console.log(getSummary());
