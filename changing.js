function playVideo(){
    console.log(this);
}

playVideo.call({ name: 'anubhav'}, 1, 2);
playVideo.apply({name: 'ajmera'}, [1, 2]);
playVideo.bind({name: 'apple'}) ();    

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};

video.showTags();