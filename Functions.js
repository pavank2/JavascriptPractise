function arrayMod(arr, item = 40) {
  //Default value
  arr.push(item);
  return arr.shift();
}

var arr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(arr));
console.log(arrayMod(arr));
console.log(arrayMod(arr, 6));
console.log("After: " + JSON.stringify(arr));

//To leave the parameter as default, pass it as undefined.
