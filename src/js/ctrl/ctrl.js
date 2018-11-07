let blog, view, homeView, postView, adminView;

class Controller {
    static newPost () {
        //Gets info from view
        const info = adminView.getInfo();

        //Creates new Post
        const newPost = new Post(info.title, info.content, info.imageUrl, new Date(), info.authorId, data.users[authorId]); 
        
        //Saves (via the API)
        DataAccess.savePost(newPost);

        //Clears fields
        adminView.clearFields();
    }

    // static newUser () {
    //     //Gets info from view
    //     //const newUser = GET USER SOMEWHERE FROM

    //     //TEMP
    //     //let newUser = new User('John', 'JohnnyBoy', 'john.jpg', 2, 4, new Date());

    //     //Saves (via the API)
    //     DataAccess.saveUser(newUser);
    // }

    static displayPosts () {
        //Loads posts from API and calls the callback function, to insert posts on the page
        DataAccess.loadAllPosts(homeView.displayPosts);
    }

    static displayPost (postID) {
        //Loads post from API and calls the callback function, to insert post on the page
        DataAccess.loadPost(postID, postView.displayPost);
    }

    static displayComments(postID) {
        //Loads comments from specfic post from API and calls the callback function, to insert comments on page
        DataAccess.loadPostComments(postID, postView.displayComments);
    }

    //Temp?
    static getAllComments() {
        DataAccess.loadAllComments(Controller.print);
    }

    //Temp?
    static getAllPosts() {
        DataAccess.loadAllPosts(Controller.print);
    }

    //Temp?
    static getAllUsers() {
        DataAccess.loadAllUsers(Controller.print);
    }

    static test () {
        DataAccess.loadPostComments(4, Controller.print);
    }

    //TEMP
    static print (input) {
        console.log(input);
    }

    static updateAuthorForm () {
        //Loads users/authors from API and calls adminView.updateAuthors() (as callback function)
        DataAccess.loadAllUsers(adminView.updateAuthors);
    }

    static setupEventListeners () {
        const DOMstrings = view.getDOMstrings();

        if (document.URL.includes('index.html')) {
            //Page load
            window.addEventListener('load', function () {
                //Loads post previews to index.html
                Controller.displayPosts();

                sessionStorage.setItem('postID', 0);
            });

            //Make blog posts clickable
            const postLinks = document.querySelectorAll(DOMstrings.home.postLink);

            postLinks.forEach(postLink => {
                postLink.addEventListener('click', function (event) {
                    const postID = event.target.closest('article').id.split('postID-')[1];
    
                    //Saves the clicked post's ID to sessionStorage, to use it when post.html loads
                    sessionStorage.setItem('postID', postID);

                    //Changes page to post.html
                    document.location = '/post.html';
                });
            });

            // EventListener til click på en post, EventListener til click på nav (og skift af classen actice)
        }
        else if (document.URL.includes('post.html')) {
            window.addEventListener('load', function () {
                //Gets the postID from sessionStorage
                const postID = sessionStorage.getItem('postID');

                if (postID !== 0) {
                    Controller.displayPost(postID);
                    Controller.displayComments(postID);
                }
                else {
                    console.log('ERROR with loading postID from SessionStorage');
                }
            });
        }
        else if (document.URL.includes('admin.html')) {
            //'Publish' button
            document.querySelector(DOMstrings.admin.publishBtn).addEventListener('click', function () {
                Controller.newPost();
            });

            //'Chose Image' button
            document.querySelector(DOMstrings.admin.imageBtn).addEventListener('click', function () {
                let imgURL = prompt("Please enter the image URL");
                console.log(imgURL);
        
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
        homeView = new HomeView();
        postView = new PostView();
        adminView = new AdminView();

        //Adds EventListeners
        Controller.setupEventListeners();
    }
}

// Starter
Controller.initialize();
