class Blog {
    newPost () {
        // Skal finde det næste ledige ID, udfra de eksisterende posts, og bruge det til at lave en post.
        // Skal lave ny post
        // Skal gemme den i data objektet
        // Skal kalde saveData
    }

    postToAPI (url, data) {
        axios.post('/user', {
            firstName: 'Fred',
            lastName: 'Flintstone'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    saveData (url, data) {

    }

    async getFromAPI (url) {
        try {
            const response = await axios.get(url);    
            return response.data;
        } 
        catch (error) {
            console.error(error);
        }
    }

    loadData (requestInfo) {
        let url = 'https://localhost:44321/api/';
        let error = false;
        let answer;

        //Validates requestInfo
        if(typeof(requestInfo.user) === "boolean" 
        && typeof(requestInfo.post) === "boolean"
        && Number.isInteger(requestInfo.userId)
        && Number.isInteger(requestInfo.postId)){
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
            else if (requestInfo.user && requestInfo.userId != 0) {
                url += 'userinfoes' + '/' + requestInfo.userId;
    
                this.getFromAPI(url)
                .then(function (response) {
                    //Adds user to data object       
                    data.users[response.userInfoID] = response;
                })
                .catch (function (error) {
                    console.log(error);
                });
            }
            else if (requestInfo.user) {
                url += 'userinfoes';
    
                this.getFromAPI(url)
                .then(function (response) {                
                    //Adds each user to data object
                    response.forEach(user => {
                        data.users[user.userInfoID] = user;
                    });
                })
                .catch (function (error) {
                    console.log(error);
                });
            }
            else if (requestInfo.post && requestInfo.postId != 0) {
                url += 'posts' + '/' + requestInfo.postId;
    
                this.getFromAPI(url)
                .then(function (response) {
                    //Adds post to data object       
                    data.posts[response.postId] = response;
                })
                .catch (function (error) {
                    console.log(error);
                });
            }
            else if (requestInfo.post) {
                url += 'posts';
    
                this.getFromAPI(url)
                .then(function (response) {
                    //Adds each post to data object
                    response.forEach(post => {
                        data.posts[post.postId] = post;
                    });
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