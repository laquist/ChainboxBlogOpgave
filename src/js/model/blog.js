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

    // Er static for at teste
    static getData (requestInfo) {
        let url = 'https://localhost/api/';
        let error = false;
        let answer;

        if (requestInfo.user && requestInfo.post && requestInfo.userId != 0) {
            // https://localhost/api/user/1/post
            url += 'user/' + requestInfo.userId + '/post';
            if (requestInfo.postId != 0) {
                // https://localhost/api/user/1/post/1
                url += '/' + requestInfo.postId;
            }
        }
        else if (!requestInfo.user) {
            // https://localhost/api/post
            url += 'post';
            if (requestInfo.postId != 0) {
                // https://localhost/api/post/1
                url += '/' + requestInfo.postId;
            }
        }
        else if (!requestInfo.post) {
            // https://localhost/api/user
            url += 'user';
            if (requestInfo.userId != 0) {
                // https://localhost/api/user/1
                url += '/' + requestInfo.userId;
            }
        }
        else {
            // ERROR
            error = true;
        }

        // TEST
        // url = 'https://jsonplaceholder.typicode.com/posts/1/users/';
        url = 'https://jsonplaceholder.typicode.com/posts/';

        if (!error) {
            axios.get(url)
            .then(function (response) {
                // handle success
                console.log(response);
                // console.log(response.data);
                //response.data tror jeg er ens json data allerede formateret til JS objects.
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        }

        console.log('answer ==    ' + answer)
        return answer;
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