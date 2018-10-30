let blog;
let view;

class Controller {
    static updateAllPosts () {
        //Skal hente igennem model (Blog.js)
        // blog.getData();
    }

    static setupEventListeners () {

    }
    
    static initialize () {        
        //Creates Blog instance
        blog = new Blog();

        //Creates View instance
        view = new View();

        //Adds EventListeners
        Controller.setupEventListeners();
    }
}

// Starter
Controller.initialize();