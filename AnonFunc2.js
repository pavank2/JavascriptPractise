
/*In JavaScript function defined inside has access to outer function variable and function is the first class object so it can be returned by function as well and passed as argument in another function.

A function is an instance of the Object type
A function can have properties and has a link back to its constructor method
Function can be stored as variable
Function can be passed as a parameter to another function
Function can be returned from function
*/


function mult(x){
    return function(y){
        return function(z){
            return x*y*z;
        }
    }
}

console.log(mult(2)(3)(4));