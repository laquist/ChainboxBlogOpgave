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