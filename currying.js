//define function
let multiply = function(x,y){
    console.log(x*y);
}

//bind
let double = multiply.bind(this,2);
double(3);

let triple = multiply.bind(this,3);
triple(5);

//closure

let Clmultiply= function(x){
    return function(y){
        console.log(x * y);
    }
}

let clDouble = Clmultiply(2);
clDouble(4);

let cltriple = Clmultiply(3);
cltriple(9);
