var sum = (function(){                //Not working
  return function add (...args){
      return args.reduce((a,b) => a+b,0);
  }

})();

console.log(sum(1,2,4,5));