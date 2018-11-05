let blog, view, homeView, postView, adminView;

class Controller {
    static newPost () { //Mangler at save til API
        //Gets info from view
        const info = adminView.getInfo();

        //Creates new Post
        const newPost = new Post(info.title, info.content, info.imageUrl, new Date(), info.authorId);
        
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
        //Loads posts from API and calls the callback function, to insert post on the page
        DataAccess.loadAllPosts(homeView.displayPosts);
    }

    static displayPost (id) {
        DataAccess.loadPost(id, postView.displayPost);
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
            });

            //Make blog posts clickable
            const postLinks = document.querySelectorAll(DOMstrings.home.postLink);

            postLinks.forEach(postLink => {
                postLink.addEventListener('click', function (event) {
                    const postID = event.target.closest('article').id.split('postID-')[1];
    
                    Controller.displayPost(postID);
                });
            });

            // const navLink
            // EventListener til click på en post, EventListener til click på nav (og skift af classen actice)
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