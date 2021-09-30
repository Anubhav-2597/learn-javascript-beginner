function greet() {
    console.log("Hello World");
}

greet();

//arguments -- they are passed during the function calling and 
// they are the values of the parameters
//parameters -- they are defined in the function definition
// see example below

//it is a function that performs a task
function greet1(name) {
    console.log("Hello "+ name);
}

greet1('Anubhav');

//passing multiple arguments
function greet3(firstName, lastName){
    console.log(firstName + " " + lastName);
}

greet3('Mango');
//bydefault value of a variable is not defined if we didn't assign any value
greet3('Banana','ajmera'); 

//it is a function that calculates a value
function square(number){
    return number * number;
}

let number = square(2);
console.log(number);

console.log(square(2));