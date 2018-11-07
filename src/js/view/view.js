class View {  
    getDOMstrings () {
        return DOMstrings;
    }
}

let DOMstrings = {
    home: {
        articleContainer: '#articleContainer',
        postLink: '.postLink'
    },
    post: {
        headerImgContainer: '#headerImgContainer',
        contentContainer: '#contentContainer',
        date: '#postDate',
        title: '#postTitle',
        author: '#postAuthor',
        commentContainer: '#commentContainer'
    },
    admin: {
        title: '#titleInput',
        author: '#authorSelect',
        defaultAuthor: '#default',
        content: '#contentInput',
        image: '#imageInput',
        imageBtn: '#imageInputBtn',
        publishBtn: '#publishBtn',
    }
};

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];