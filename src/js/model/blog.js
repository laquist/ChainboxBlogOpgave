class Blog {
    newPost () {
        // Skal finde det næste ledige ID, udfra de eksisterende posts, og bruge det til at lave en post.
        // Skal lave ny post
        // Skal gemme den i data objektet
        // Skal kalde saveData
    }

    // getData () {
    //     //Gets from JSON API to data object.

    //     //Skal få users og gemme i data objektet
    //     //Skal få posts og gemme i data objektet (og så skal authoren gerne være under data-> users, som så skal kobles sammen)
    // }

    saveData () {
        //Saves data object via JSON API
    }


    //Kan jeg lave en genererisk metode som bare GETTER fra JSON? I stedet for at skulle have:
    // Alle posts, en specifik post, alle user, en specifik user, en specifik user og hans posts, en specifik user og en specifik post fra ham
    
    
    //Den skal kunne have 4 argumenter fordi den skal kunne få: en post (alle), en user, en users posts (alle), en users specifikke post (https://localhost/api/user/1/post/1) 
    //Er kun static for at teste!
    static getData (type, arg1, arg2, arg3, arg4) {
        let url = 'https://localhost/api/';
        
        if (type === 'post') {
           url += 'post'
           //All posts
        }
        else if (type === 'user') {
            
        }
        else if (type === 'both') {

        }
        else {
            //ERROR
        }
    }
}

let data = {
    //Behøver jeg lave noget i dette object? Det bliver vel bare fyldt ud fra den info jeg får.
    // user -> post -> comments
    // user: {
    //     posts: {
    //         comments: {

    //         }
    //     }
    // }

    // users: [],
    // posts: {
    //     comments: {

    //     }
    // }
}

// Få alle posts:
// https://localhost/api/post

// få en blogpost:
// https://localhost/api/post/1
// 1 værende id på en blogpost

// få alle users:
// https://localhost/api/user

// få en bruger og hans tilhørende information:
// https://localhost/api/user/1

// få en bruger og hans tilhørende posts:
// https://localhost/api/user/1/post

// få en bruger og en af hans specifikke posts:
// https://localhost/api/user/1/post/1