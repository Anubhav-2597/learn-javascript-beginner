const courses = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'JavaScript'},
];

courses.sort(function(a, b){
    const nameA = a.name.toLocaleLowerCase();
    const nameB = b.name.toLocaleLowerCase();

    if (nameA>nameB) return 1;
    if (nameA<nameB) return -1;
    return 0;   
});

console.log(courses);
