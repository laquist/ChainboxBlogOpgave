class User {
    constructor (userInfoID, name, userName, profilePicture, numberOfPosts, numberOfComments, registerDate) {
        this.userInfoID = userInfoID;
        this.name = name;
        this.userName = userName;
        this.profilePicture = profilePicture;
        this.numberOfPosts = numberOfPosts;
        this.numberOfComments = numberOfComments;
        this.registerDate = new Date(registerDate);
    }
}