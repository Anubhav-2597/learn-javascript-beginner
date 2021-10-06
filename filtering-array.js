const numbers = [1, -2, 2, 3];

const filtered = numbers.filter(function(value){
    return value>=0;
});

console.log(filtered);

//can be done through arrow function

const filtered1 = numbers.filter(n => n >=0);

console.log(filtered1);