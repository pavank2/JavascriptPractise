let obj = { x: 5, y: 6, z: 7 };

let a = obj.x;
let b = obj.y;
let c = obj.z;

//Destructuring - shorter notation to assign or rename object variables. Vars should have same name as in object
const { x, y, z } = obj;

console.log(x, y, z);

const { x: a1, y: b1, z: c1 } = obj; // You can rename the vars

console.log(a1, b1, c1);

const { arr = [], newVar = "" } = obj; //Assign default values

console.log(arr, newVar);

//Mutating vars

(a = 100), (b = 200);

const obj1 = { a: 10, b: 20 };

({ a, b } = obj1); //need to put brackets () for assignment of object vars

console.log(a, b);

//Destructuring in a function

const obj2 = {
  a: 10,
  b: 20,
  func: function ({ delivery, date, order }) {
    // Destructuring within the function,Order can be changed from object def but names have to be same
    console.log(order, delivery, date);
  },
};

obj2.func({
  order: "Yes",
  delivery: "Now",
  date: 2021,
});

//Nested destructuring - complex example

// const LOCAL_FORECAST = {
//   today: { min: 23, max: 35 },
//   tomorrow: { min: 24, max: 33 },
// };

// function getTomorrowMax(weather) {
//   const { tomorrow: tempTomorrow } = weather;

//   console.log(tempTomorrow);
//   const { max: tomorrowMax } = tempTomorrow;

//   console.log(tomorrowMax);

//   //shorter notation of getting nested object
//   const {
//     tomorrow: { max: maxTomorrow, min: minTomorrow },
//   } = weather;
//   console.log(maxTomorrow);
// }

// getTomorrowMax(LOCAL_FORECAST);
