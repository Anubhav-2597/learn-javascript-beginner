//method -> obj
// function -> global (window, global)

// const video = {
//     title: 'x',
//     play(){
//         console.log(this);
//     }
// };

// // video.stop = function(){
// //     console.log(this);
// // };

// // video.stop();

// function Video(title){
//     this.title = title;
//     console.log(this);
// }

// const v = new Video('b');

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        }, this); 
    }
};

video.showTags();
