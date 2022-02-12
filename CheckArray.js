var arr = "Str";

if (Object.prototype.toString.call(arr) === '[object Array]')
   console.log("Array");
else
    console.log("Not Array");   