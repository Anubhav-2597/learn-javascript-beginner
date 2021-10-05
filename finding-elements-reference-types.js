const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'}
];

const course = courses.find(function(course){
    return course.name === 'a';
}); 

const course1 = courses.findIndex(function(course){
    return course.name === 'xyz';
});

console.log(course);
console.log(course1);
console.log(courses.includes({id: 1, name: 'a'}));