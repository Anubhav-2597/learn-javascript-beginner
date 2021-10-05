let numbers = [1, 2, 3, 4];
let another = numbers;

//solution 1
// numbers = [];
// console.log(numbers);

// console.log(another);

//solution 2 (preferred solution)
// numbers.length = 0;

// console.log(numbers);
// console.log(another);

//solution 3
numbers.splice(0, numbers.length);
console.log(numbers);
console.log(another);

//solution 4
// while (numbers.length>0)
//     numbers.pop();

// console.log(numbers);
// console.log(another);

