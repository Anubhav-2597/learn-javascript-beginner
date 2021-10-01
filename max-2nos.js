// write a function that takes two numbers and returns the maximum 
// of the two.

//-------- 1st method ---------//
// let number = max(3,2);
// console.log(number);

// function max(a, b){
//     if (a>b) return a;
//     else return b;
// }

//---------- 2nd method -----------//
// let number = max(4,3);
// console.log(number);

// function max(a, b) {
//     if(a>b) return a;
//     return b;
// }

//---------- 3rd method -----------//
let number = max(15,10);
console.log(number);

function max(a,b){
    return (a>b) ? a : b;
}