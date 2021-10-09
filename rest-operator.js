function sum(args){
    console.log(args);
}

//using spread operator
function sum1(...args){
    console.log(args);
    return args.reduce((a, b) => a+b);
}

//calculate discount price
function sum2(discount, ...prices){
    const total = prices.reduce((a, b) => a + b);
    return total * (1-discount);
}

console.log(sum2(0.1, 20, 30));
sum(1, 2, 3, 4, 5, 10);
console.log(sum1(1, 2, 3, 4, 5, 10));