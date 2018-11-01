class User {
    constructor (name, userName, profilePicture, numberOfPosts, numberOfComments, registerDate) {
        this.name = name;
        this.userName = name;
        this.profilePicture = profilePicture;
        this.numberOfPosts = numberOfPosts;
        this.numberOfComments = numberOfComments;
        this.registerDate = new Date(registerDate);
    }
}