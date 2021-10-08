function sum(a, b){
    return a+b;
}

console.log(sum(1, 2));
console.log(sum(3));         // 3 + undefined = NaN 
console.log(sum());
console.log(sum(1, 2, 3, 4, 5));    //it will only take first 2 arguments