const array1 = ['',null, undefined, NaN, 0, false, 1, 12];

console.log(countTruthy(array1));

function countTruthy(array1){
    let count = 0;
    for(let value of array1)
        if(value) 
            count++;
    return count;
}