class PostView {
    displayPost (post) {
        //Inserts Header image
        imageHTML = `<img class="w-100" src="{post.imageUrl}" alt="${post.title}"></img>`;
        document.querySelector(DOMstrings.post.headerImgContainer).insertAdjacentHTML('afterbegin', imageHTML);

        //Inserts Header date, title, author
        document.querySelector(DOMstrings.post.date).insertAdjacentHTML('afterbegin', post.dateOfPost);
        document.querySelector(DOMstrings.post.title).insertAdjacentHTML('afterbegin', post.title);
        document.querySelector(DOMstrings.post.author).insertAdjacentHTML('afterbegin', post.postingUser.name);

        //Inserts Content
        const contentContainer = document.querySelector(DOMstrings.post.contentContainer);

        const contentHTML = `
        <article class="py-5 px-md-5 mx-md-5" id="postContent">
            <p>${post.content}</p>
        </article>
        `;
        
        contentContainer.insertAdjacentHTML('beforeend', html)

        //Adds comments
        // this.displayComments(post.comments);
    }
    
    displayComments (comments) {

    }
}