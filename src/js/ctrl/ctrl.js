let blog, view, homeView, postView, adminView;

class Controller {
    static newPost() {
        const info = adminView.getInfo();

        
    }

    static updateAllPosts () {

    }

    //Updates the author form in admin.html
    static updateAuthorForm () {
        const requestInfo = {
            user: true,
            userId: 0,
            post: false,
            postId: 0
        };

        //Gets array of authors
        blog.getData(requestInfo).then(function (authorsArr) {
            //Sends array of authors to View
            adminView.updateAuthors(authorsArr);
        });
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

            window.addEventListener('load', function () {
                //Updates author form
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

//Husk at admin siden skal loade og indsætte authors (users), så man kan vælge dem i den select form der er 