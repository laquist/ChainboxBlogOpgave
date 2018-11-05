class DataAccess {
    //Load all users
    static loadAllUsers (callBackFunc) {
        const requestInfo = {
            user: true,
            userId: 0,
            post: false,
            postId: 0
        };

        DataAccess.loadData(requestInfo, callBackFunc);
    }

    //Load specific user
    static loadUser (id, callBackFunc) {
        const requestInfo = {
            user: true,
            userId: id,
            post: false,
            postId: 0
        };

        DataAccess.loadData(requestInfo, callBackFunc);
    }

    //Load all posts
    static loadAllPosts (callBackFunc) {
        const requestInfo = {
            user: false,
            userId: 0,
            post: true,
            postId: 0
        };

        DataAccess.loadData(requestInfo, callBackFunc);
    }

    //Load specific post
    static loadPost (id, callBackFunc) {
        const requestInfo = {
            user: false,
            userId: 0,
            post: true,
            postId: id
        };

        DataAccess.loadData(requestInfo, callBackFunc);
    }

    //Load all posts from user
    static loadUserPosts (id, callBackFunc) {
        const requestInfo = {
            user: true,
            userId: id,
            post: true,
            postId: 0
        };

        DataAccess.loadData(requestInfo, callBackFunc);
    }

    //Load specific post from user
    static loadUserPost (userIdParam, postIdParam, callBackFunc) {
        const requestInfo = {
            user: false,
            userId: userIdParam,
            post: true,
            postId: postIdParam
        };

        DataAccess.loadData(requestInfo, callBackFunc);
    }

    //Tjek denne, når den laver nye objekter. User, Post, Comment. Har lavet om i mange constructors
    static loadData (requestInfo, callBackFunc) {
        let url = 'https://localhost:44321/api/';
        let error = false;
        let answer;

        //Validates requestInfo
        if(typeof(requestInfo.user) === "boolean" 
        && typeof(requestInfo.post) === "boolean"
        && Number.isInteger(requestInfo.userId)
        && Number.isInteger(requestInfo.postId)){
            //Specific post from specific user - Not available
            if (requestInfo.user && requestInfo.post && requestInfo.userId != 0 && requestInfo.postId != 0) {
                url += 'userinfoes/' + requestInfo.userId + '/posts/' + requestInfo.postId;
    
                //Not available in API atm
                console.log('Out of service')
            }
            //All posts from specific user - Not available
            else if (requestInfo.user && requestInfo.post && requestInfo.userId != 0) {
                url += 'userinfoes' + requestInfo.userId + '/posts';
    
                //Not available in API atm
                console.log('Out of service')
            }
            //Specific user
            else if (requestInfo.user && requestInfo.userId != 0) {
                url += 'userinfoes' + '/' + requestInfo.userId;

                axios.get(url)
                .then(function (response) {
                    //Creates new User object
                    let newUser = new User(response.data.name, response.data.username, response.data.profilPictureUrl, response.data.numberOfPosts, response.data.numberOfComments, response.data.registerDate);

                    //Sets user ID
                    newUser.userInfoID = response.data.userInfoID;
                    
                    //Adds user to data object
                    data.users[newUser.userId] = newUser;

                    //Runs the callBack function with the result
                    callBackFunc(data.users[newUser.userId]);
                })
                .catch (function (error) {
                    console.log(error);
                });
            }
            //All users
            else if (requestInfo.user) {
                url += 'userinfoes';

                axios.get(url)
                .then(function (response) {
                    //Adds each user to data object
                    response.data.forEach(user => {
                        //Creates new User object
                        let newUser = new User(user.name, user.username, user.profilPictureUrl, user.numberOfPosts, user.numberOfComments, user.registerDate);

                        //Sets user ID
                        newUser.userInfoID = user.userInfoID;
                        
                        //Adds user to data object
                        data.users[newUser.userInfoID] = newUser;
                    });

                    //Runs the callBack function with the result
                    callBackFunc(data.users);
                })
                .catch (function (error) {
                    console.log(error);
                });
            }
            //Specfic post
            else if (requestInfo.post && requestInfo.postId != 0) {
                url += 'posts' + '/' + requestInfo.postId;
    
                axios.get(url)
                .then(function (response) {
                    //Creates User object
                    const postingUser = new User(response.data.name, response.data.username, response.data.profilPictureUrl, response.data.numberOfPosts, response.data.numberOfComments, response.data.registerDate);

                    //Sets user ID
                    postingUser.userInfoID = response.data.userInfoID;
                    
                    //Creates new Post object
                    let newPost = new Post(response.data.title, response.data.content, response.data.imageUrl, response.data.dateOfPost, response.data.postingUserID, postingUser);
                    
                    //Sets post ID
                    newPost.postId = response.data.postId;
                    
                    //Adds user to data object
                    data.posts[newPost.postId] = newPost;

                    //Runs the callBack function with the result
                    callBackFunc(data.posts[newPost.postId]);
                })

                .catch (function (error) {
                    console.log(error);
                });
            }
            //All posts
            else if (requestInfo.post) {
                url += 'posts';
    
                axios.get(url)
                .then(function (response) {
                    //Adds each post to data object
                    response.data.forEach(post => {
                        //Creates User object
                        const postingUser = new User(post.postingUser.name, post.postingUser.username, post.postingUser.profilPictureUrl, post.postingUser.numberOfPosts, post.postingUser.numberOfComments, post.postingUser.registerDate);
                        
                        //Sets user ID
                        postingUser.userInfoID = post.postingUser.userInfoID;

                        //Creates new Post object
                        let newPost = new Post(post.title, post.content, post.imageUrl, new Date(post.dateOfPost), post.postingUserID, postingUser);

                        //Sets post ID
                        newPost.postId = post.postId;
                        
                        //Adds user to data object
                        data.posts[newPost.postId] = newPost;
                    });

                    //Runs the callBack function with the result
                    callBackFunc(data.posts);
                })
                .catch (function (error) {
                    console.log(error);
                });
            }
        }
        else {
            console.log('Error in (requestInfo)');
        }
    }

    static savePost (post) {
        const url = 'https://localhost:44321/api/posts/';

        DataAccess.saveData(url, post);
    }

    static saveUser (user) {
        const url = 'https://localhost:44321/api/userinfoes/';

        DataAccess.saveData(url, user);
    }

    //Tjek om response er success eller fejl? Og lav en popup eller andet ved fejl?
    static saveData (url, data) {
        axios.post(url, data)
        .then(function (response) {
            // console.log(response);
            console.log('Successfully saved')
        })
        .catch(function (error) {
            console.log(error);
            console.log('Error while saving')
        });
    }
}

let data = {
    users: {},
    posts: {}
};