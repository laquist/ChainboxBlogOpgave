class Blog {
    newPost (info) {
        // Skal IKKE finde ID. Det får den når man saver til API'en (og har så et ID når du henter fra API'en)
        // Skal lave ny post
        // Skal gemme den i data objektet
        // Skal kalde saveData


    }

    postToAPI (url, data) {
        axios.post(url, data)
        .then(function (response) {
            console.log(response);
            console.log('Successfully saved')
        })
        .catch(function (error) {
            console.log(error);
            console.log('Error while saving')
        });
    }
    
    loadData (requestInfo, callBackFunc) {
        let url = 'https://localhost:44321/api/';
        let error = false;
        let answer;

        //Validates requestInfo
        if(typeof(requestInfo.user) === "boolean" 
        && typeof(requestInfo.post) === "boolean"
        && Number.isInteger(requestInfo.userId)
        && Number.isInteger(requestInfo.postId)){
            //Specific post from specific user
            if (requestInfo.user && requestInfo.post && requestInfo.userId != 0 && requestInfo.postId != 0) {
                url += 'userinfoes/' + requestInfo.userId + '/posts/' + requestInfo.postId;
    
                //Not available in API atm
                console.log('Out of service')
    
                // this.getFromAPI(url)
                // .then(function (response) {
                //     // Do stuff
                // })
                // .catch (function (error) {
                //     console.log(error);
                // });
            }
            //All posts from specific user
            else if (requestInfo.user && requestInfo.post && requestInfo.userId != 0) {
                url += 'userinfoes' + requestInfo.userId + '/posts';
    
                //Not available in API atm
                console.log('Out of service')
    
                // this.getFromAPI(url)
                // .then(function (response) {
                //     // Do stuff
                // })
                // .catch (function (error) {
                //     console.log(error);
                // });
            }
            //Specific user
            else if (requestInfo.user && requestInfo.userId != 0) {
                url += 'userinfoes' + '/' + requestInfo.userId;

                axios.get(url)
                .then(function (response) {
                    //Creates new User object
                    let newUser = new User(response.data.userInfoID, response.data.name, response.data.username, response.data.profilFictureUrl, response.data.numberOfPosts, response.data.numberOfComments, response.data.registerDate);

                    //Sets user ID
                    newUser.userId = response.userInfoID;
                    
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
                        let newUser = new User(user.userInfoID, user.name, user.username, user.profilPictureUrl, user.numberOfPosts, user.numberOfComments, user.registerDate);

                        //Sets user ID
                        newUser.userId = user.userInfoID;
                        
                        //Adds user to data object
                        data.users[newUser.userId] = newUser;
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
                    //Creates new Post object
                    let newPost = new Post(response.data.title, response.data.content, response.data.imageUrl, response.data.dateOfPost, response.data.postingUser.userInfoID);

                    //Bliver den nye efter emil har updated
                    // let newPost = new Post(response.title, response.content, response.imageUrl, response.dateOfPost, response.userId);
                    
                    //Sets post ID
                    newPost.postId = response.postId;
                    
                    //Adds user to data object
                    data.posts[newPost.postId] = newPost;

                    //Runs the callBack function with the result
                    callBackFunc(data.posts[newPost.Id]);
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
                        //Creates new Post object
                        let newPost = new Post(post.title, post.content, post.imageUrl, post.dateOfPost, post.postingUser.userInfoID);

                        //Bliver den nye efter emil har updated
                        // let newPost = new Post(post.title, post.content, post.imageUrl, post.dateOfPost, post.userId);
                        
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
}

let data = {
    users: {},
    posts: {}
};