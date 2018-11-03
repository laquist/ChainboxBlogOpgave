class User {
    constructor (name, username, profilPictureUrl, numberOfPosts, numberOfComments, registerDate, posts, comments) {
        // this.userInfoID = userInfoID;
        this.name = name;
        this.username = username;
        this.profilPictureUrl = profilPictureUrl;
        this.numberOfPosts = numberOfPosts;
        this.numberOfComments = numberOfComments;
        this.registerDate = new Date(registerDate);
        this.posts = posts;
        this.comments = comments;
    }
}