function modifyArray(arr, callback) {
  //do something to array
  arr.push(100);
  console.log(arr);
  callback(); // Callback is called here
}

var arr = [1, 2, 3, 4, 5];

modifyArray(arr, function () {
  //Callback is defined here
  console.log("Array has been modified");
});
