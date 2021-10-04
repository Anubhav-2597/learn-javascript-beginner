const message = 
'this is my\n' + 
'\'first\' message';

//template literal method
const another = `this is 
my 'first' message`;
console.log(another);

//common string method
const name = 'John';
const message1 = 'Hi ' + name + ',\n';

//template literal way of doing it
const another1 = 
`Hi ${name} ${2 + 3}, 

Thank you for joining my mailing list.

Regards,
Anu`;

console.log(another1);