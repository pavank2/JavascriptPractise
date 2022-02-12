const arr1 = ["JAN", "FEB", "MAR", "APRIL"];
let arr2;

function spread() {
  arr2 = [...arr1]; //Can be used when we need elements of array individually. Also create shallow copy of array
  arr1[0] = "January";

  console.log(arr2[0]);
}

spread();
