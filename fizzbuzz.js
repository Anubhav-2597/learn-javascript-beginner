// Divisible by 3 -- Fizz
// Divisible by 5 -- Buzz
// Divisible by both 3 and 5 -- FizzBuzz
// Not divisible by 3 or 5 -- input(same number is returned)
// not a number -- 'not a number'(if we don't pass a number say for ex:'string')

// const output = fizzBuzz(30);
// console.log(output);

// function fizzBuzz(input){
//     if(input % 3 === 0 && input % 5 === 0) return 'fizzBuzz';
//     else if(input % 5 === 0) return 'Buzz';
//     else if(input % 3 === 0) return 'fizz';
//     else if(input % (3 && 5) !== 0) return input;
//     else return 'not a number';
// }

//////////---------------////////////

const output = fizzBuzz('BC');
console.log(output);

function fizzBuzz(input){
    if(typeof(input) === 'number'){
        if(input % 3 === 0){
            if(input % 5 === 0) return 'fizzBuzz';
            else return 'fizz';
        }
        else if(input % 5 === 0) return 'Buzz';

        else return input;
    }
    else return NaN;
}