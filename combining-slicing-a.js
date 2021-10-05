const first = [1, 2, 3];
const second = [4, 5, 6];
const third = [{ id: 1 }];

const combined = first.concat(second);
//console.log(combined);

//another method 
const slice = combined.slice(2, 4);

console.log(combined);
console.log(slice);

//---------------//
third[0].id = 10;
const combined1 = third.concat(second);
console.log(combined1);