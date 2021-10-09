//function declaration 
//we can call this function before it's definition
walk();

function walk(){
    console.log('walk');
}

//Anonymous function expression becoz here function has no name
//we can't call this function before it's definition, becoz here we are assigning
//a function to a variable
//so run(); it gives an error
//so while defining a function using function expression we can't call them before 
//its definition

const run = function(){
    console.log('run');
};

let move = run;
run();
move();