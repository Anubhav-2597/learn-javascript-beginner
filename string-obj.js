//string primitive
const message = 'this is my first message';

//string object
const another = new String('hi');

console.log(message.length);
console.log(message[0]);
console.log(message[1]);
console.log(message.includes('my'));
console.log(message.includes('not'));
console.log(message.startsWith('This'));
console.log(message.startsWith('this'));
console.log(message.endsWith('e'));
console.log(message.indexOf('my'));
console.log(message.toUpperCase());
console.log(message.replace('first','second'));

console.log(message.split(' '));

//message.trim -- remove white spaces from our code.