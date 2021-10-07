const numbers = [1, 2, 3, 4, 1, 1, 1, 1, 2];

const count = countOccurences(numbers, 1);

console.log(count);

function countOccurences(array, searchElement){
    // let c1 = 0;
    // for(let number of numbers)
    //     if(number === searchElement)
    //         c1 += 1;
    // return c1;

    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurrence;
    }, 0);
}   