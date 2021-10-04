const circle = {
    radius: 1,
    draw(){
        console.log('draw');
    }
};

for(let key in circle)
    console.log(key, circle[key]);

//we can use for of loop in slight different way
for(let key of Object.keys(circle))
    console.log(key);

//another method 
for (let entry of Object.entries(circle))
    console.log(entry);

//------------------------//

if ('radius' in circle) console.log('yes');