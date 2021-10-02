// Average = 70

// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const marks = [80, 70, 80];

console.log(calculateGrade(marks));

function calculateAverage(array){
    let sum = 0;
    for(let value of array)
        sum = sum+value;
    return sum/array.length;
}

function calculateGrade(marks){
    const avg = calculateAverage(marks);

    if(avg<60) return 'F grade';
    if(avg<70) return('D grade');
    if(avg<80) return('C grade');
    if(avg<90) return('B grade');
    else return 'A grade';
}

