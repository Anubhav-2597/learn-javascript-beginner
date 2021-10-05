const numbers = [1, 2, 3, 4];

//removing from the end
const last = numbers.pop();
console.log(numbers);
console.log(last);

//removing from the start
const first = numbers.shift();
console.log(first);
console.log(numbers);

//removing from the middle
numbers.splice(1, 1);           //splice(index, number of elements)
console.log(numbers);