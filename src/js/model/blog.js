class Blog {
    newPost () {
        // Skal finde det næste ledige ID, udfra de eksisterende posts, og bruge det til at lave en post.
        // Skal lave ny post
        // Skal gemme den i data objektet
        // Skal kalde saveData
    }

    saveData () {
        //Saves data object via JSON API
    }

    getData (requestInfo) {
        let url = 'https://localhost:44321/api/';
        let error = false;
        let answer;

        if (requestInfo.user && requestInfo.post && requestInfo.userId != 0) {
            url += 'userinfoes' + requestInfo.userId + '/posts';

            if (requestInfo.postId != 0) {
                url += '/' + requestInfo.postId;  
            }
        }
        else if (!requestInfo.user) {
            url += 'posts';

            if (requestInfo.postId != 0) {
                url += '/' + requestInfo.postId;
            }
        }
        else if (!requestInfo.post) {
            url += 'userinfoes';

            if (requestInfo.userId != 0) {
                url += '/' + requestInfo.userId;
            }
        }
        else {
            // ERROR
            error = true;
        }

        if (!error) {
            async function getStuff() {
                try {
                    const response = await axios.get(url);    
                  
                    return response.data;
                } 
                catch (error) {
                    console.error(error);
                }
            }
    
          return getStuff();
        }
    }
}

let data = {
    
}

// requestInfo = {
//     user: false,
//     userId: 0,
//     post: false,
//     postId: 0
// }