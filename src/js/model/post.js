class Post {
    constructor (title, content, imageUrl, dateofPost, userId) {
        // this.postId = postId;
        this.title = title;
        this.content = content;
        this.imageUrl = imageUrl;
        this.dateofPost = new Date(dateofPost);
        this.userId = userId;
        //comments?
    }
}

//??????????????
//syntax for at sætte billeder ind: [img]https://i.imgur.com/sGYuIyO.gif[/img]
//italics: [i]Le italy[/i]
//og så videre