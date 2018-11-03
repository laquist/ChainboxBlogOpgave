let blog, view, homeView, postView, adminView;

class Controller {
    static newPost() { //Mangler at save til API
        //Gets info from view
        const info = adminView.getInfo();

        //Creates new Post
        const newPost = new Post(info.title, info.content, info.imageUrl, new Date(), info.authorId);
        
        //Saves (via the API)
        const url = 'https://localhost:44321/api/posts/';
        // dataAccess.saveData(url, newPost);
        //Tjek om response er success eller fejl? Og lav en popup eller andet ved fejl?
        console.log(newPost);

        //Clears fields
        adminView.clearFields();
    }

    static updateAllPosts () {
        const requestInfo = {
            user: false,
            userId: 0,
            post: true,
            postId: 0
        };

        dataAccess.loadData(requestInfo, function (value) {
            console.log(value);
        });
    }

    static updateAuthorForm () {
        const requestInfo = {
            user: true,
            userId: 0,
            post: false,
            postId: 0
        };

        //Loads users/authors from API and calls adminView.updateAuthors() (as callback function)
        dataAccess.loadData(requestInfo, adminView.updateAuthors);
    }

    // static newUserTest () {
    //     // let newUser = new User(2, 'John', 'JohnnyBoy', 'john.jpg', 2, 4, "2018-10-25T00:00:00");
    //     let newUser = new User('John', 'JohnnyBoy', 'john.jpg', 2, 4, new Date(), null, null);
    //     console.log('newUser:')
    //     console.log(newUser);
    //     // console.log(JSON.stringify(newUser));


    //     const urll = 'https://localhost:44321/api/userinfoes/';

    //     dataAccess.saveData(urll, newUser);
    // }

    // static newPostTest () { // FIX DENNE! GIVER FEJL 400
    //     let newPost = new Post('Titel1', 'Content1', 'hejIgen.jpg', new Date(), data.users[1], new Comment(2, data.users[1], this, 'Comment Content', new Date()));
    //     console.log('newPost:');
    //     console.log(newPost);

    //     const urll = 'https://localhost:44321/api/posts/';

    //     dataAccess.saveData(urll, newPost);

    //     //Får en ERROR men den poster stadig til API'en, så den er der når man henter posts igen
    //     // POST https://localhost:44321/api/posts/ net::ERR_SPDY_PROTOCOL_ERROR 200
    // }

    static setupEventListeners () {
        const DOMstrings = view.getDOMstrings();

        if (document.URL.includes('index.html')) {
            //Skal loade posts til forsiden
        }
        else if (document.URL.includes('post.html')) {
            //Skal loade en post til post.html siden
        }
        else if (document.URL.includes('admin.html')) {
            //'Publish' button
            document.querySelector(DOMstrings.admin.publishBtn).addEventListener('click', function () {
                Controller.newPost();
            });

            //'Chose Image' button
            document.querySelector(DOMstrings.admin.imageBtn).addEventListener('click', function () {
                let imgURL = prompt("Please enter the image URL");
        
                if (imgURL) {
                    document.querySelector(DOMstrings.admin.image).textContent = imgURL;
                } else {
                    //ERROR
                    input = "No image chosen";
                }
            });

            //Page load
            window.addEventListener('load', function () {
                Controller.updateAuthorForm();
            });
        }
    }
    
    static initialize () {        
        //Creates Blog instance
        blog = new Blog();

        //Creates View instances
        view = new View();

        //Creates DataAccess instance
        dataAccess = new DataAccess();
        
        if (document.URL.includes('index.html')) {
            homeView = new HomeView();
        }
        else if (document.URL.includes('post.html')) {
            postView = new PostView();
        }
        else if (document.URL.includes('admin.html')) {
            adminView = new AdminView();
        }

        //Adds EventListeners
        Controller.setupEventListeners();
    }
}

// Starter
Controller.initialize();