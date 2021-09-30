let x = 10;
let y = 3;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x**y);
console.log(x%y);

//increment
console.log(++x);
console.log(x++);

///decrement
console.log(--x);
console.log(x);

x = x + 5;
x += 5;

x = x*3;
x *= 3;

console.log(x);

let z = 1;

//Relational 
console.log(z>0);
console.log(z>=1);
console.log(z<1);
console.log(z<=1);

//Equality 
console.log(z===1);
console.log(z!==1);

//strict equality 
//only return true if the values and type are same  
console.log(1 === 1);
console.log('1' === 1);

//loose equality
//returns true if values aer same and converts the type of right 
// to match with the type of left
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);
