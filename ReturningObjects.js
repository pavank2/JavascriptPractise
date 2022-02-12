// const createPerson = (name,age,gender) => {

//   return  {
//       name: name,
//       age: age,
//       gender: gender
//     };
// };

//Easier way of doing the above
const createPerson = (name,age,gender) => ({name,age,gender});


console.log(createPerson("James",56,"Male"));