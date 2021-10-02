console.log(sum(12));

function sum(limit){
    let count = 0;

    for(let i=1; i<=limit; i++) 
        if(i%3 === 0 || i%5 === 0)
            count = count+i;

    return count;
}