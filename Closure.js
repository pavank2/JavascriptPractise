function calculateBase() {
  const baseNum = 6;
  return function (X) {
    return baseNum + X;
  };
}

addSix = calculateBase();

console.log(addSix(10)); //has access to local var env of function where it was created

console.dir(addSix);
