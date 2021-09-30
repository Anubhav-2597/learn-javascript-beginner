//instead of doing this we create an object
// name = 'Anubhav';
// age = 30;
//let person = {};
let person = {
    name: 'Anubhav',
    age: 30
};

console.log(person);

//dot notation
person.name = 'Ajmera';
console.log(person.name);

//bracket notation
let selection = 'name';
person[selection] = 'apple';

console.log(person.name);