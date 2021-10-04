//primitive way of creating variables -- they are copied by values

// let x = 10;
// let y = x;

// x = 20;

//reference types -- they are copied by reference i.e address

let x = {value: 10};
let y = x;

x.value = 20;

console.log(y);

// using value method in function
let number = 50;

function increase(number) {
    number++;
}

increase(number);
console.log(number);

//using reference method in function
let obj = { value: 89 };

function increase(obj){
    obj.value++;
}

increase(obj);
console.log(obj);