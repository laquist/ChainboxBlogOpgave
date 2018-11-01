let blog, view, homeView, postView, adminView;

class Controller {
    static newPost() {
        //Gets info from view
        const info = adminView.getInfo();

        //

    }

    static updateAllPosts () {
        const requestInfo = {
            user: false,
            userId: 0,
            post: true,
            postId: 0
        };

        blog.loadData(requestInfo);
    }

    //Updates the author form in admin.html 
    static updateAuthorForm () {
        const requestInfo = {
            user: true,
            userId: 0,
            post: false,
            postId: 0
        };

        //Loads users/authors from API
        // blog.loadData(requestInfo);
        blog.loadData(requestInfo)

        const data = blog.getData();

        //Sends to view
        adminView.updateAuthors(data.users);
    }

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