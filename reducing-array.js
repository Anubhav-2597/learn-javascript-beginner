const numbers = [1, -1, 2, 3];

let sum = 0;
for(let n of numbers)
    sum += n;

console.log(sum);

//more cleaner way of doing this

const sum1 = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue   
);

console.log(sum1);