class Post {
    constructor (title, content, imageUrl, dateOfPost, postingUser, comments) {
        // this.postId = postId;
        this.title = title;
        this.content = content;
        this.imageUrl = imageUrl;
        this.dateofPost = new Date(dateOfPost);
        this.postingUser = postingUser; //dette er bare userID
        this.comments = comments;
    }
}