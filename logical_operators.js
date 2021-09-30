// falsy(false)
// undefined
// null
// 0 
// false
// ''
// NAN(not a number)

//Anything that is not Falsy -> Truthy
console.log(false||true);
console.log(false||'Mosh');
console.log(false||1);

//Short circuiting
console.log(false||1||2);

let userColor = 'red';
let defaultColor = 'blue';
let otherColor = 'undefined';

let currentColor = userColor || defaultColor;
console.log(currentColor);

currentColor = otherColor || defaultColor;
console.log(currentColor);

//Bitwise operators
//1 = 00000001
//2 = 00000010
//3 = 00000011
//0 = 00000000

console.log(1 | 2);
console.log(1 & 2);

// Read, Write & Execute
// 00000100 -- 4
// 00000010 -- 2
// 00000001 -- 1

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | writePermission;

let message = 
    (myPermission & readPermission) ? 'yes' : 'no';

console.log(message);

//operator precedence
console.log(2+3*4);
