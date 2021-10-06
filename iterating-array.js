const numbers = [1, 2, 3];

for(let number of numbers)
    console.log(number);

//another way of doing above task
numbers.forEach(function(number){
    console.log(number)
});

//another way of doing above thing using arrow function
numbers.forEach((number,index) => console.log(number, index));