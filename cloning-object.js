const circle = {
    radius: 1,
    draw(){
        console.log('draw');
    }
};

const another = {};

for(let key in circle)
    another[key] = circle[key];

console.log(another);


//another method of cloning an object

const another1 = Object.assign({
    color: 'yellow'
}, circle);
console.log(another1);

//another method of cloning an object(spread method)
const another2 = { ...circle };

console.log(another2);  