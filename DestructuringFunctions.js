const stats = {
    max: 34,
    min: 22,
    avg: 25,
    mean: 27
};

const half = (function(){

    return function half({max,min}){  //only passing reuired properties
        return (max+min)/2;
    } ;
})();

console.log(half2(stats));