class PostView {
    displayPost (post) {
        const contentContainer = document.querySelector(DOMstrings.post.contentContainer);
        
        console.log(post);
        // const testImg = 'https://www.mememaker.net/api/bucket?path=static/img/memes/full/2014/Oct/31/16/god-damn-it-rob-you-got-me.jpg';

        //Inserts Header image
        //post.imageUrl
        const imageHTML = `<img class="w-100" src="${post.imageUrl}" alt="${post.title}"></img>`;
        document.querySelector(DOMstrings.post.headerImgContainer).insertAdjacentHTML('afterbegin', imageHTML);

        //Inserts Header date, title, author
        const dateString = post.dateOfPost.getDate() + ' ' + months[post.dateOfPost.getMonth()] + ' ' + post.dateOfPost.getFullYear();
        document.querySelector(DOMstrings.post.date).insertAdjacentHTML('afterbegin', dateString);
        document.querySelector(DOMstrings.post.title).insertAdjacentHTML('afterbegin', post.title);
        document.querySelector(DOMstrings.post.author).insertAdjacentHTML('afterbegin', 'BY ' + post.postingUser.name);

        //Inserts Content
        const contentHTML = `
        <article class="py-5 px-md-5 mx-md-5" id="postContent">
            <p>${post.content}</p>
        </article>
        `;
        
        contentContainer.insertAdjacentHTML('beforeend', contentHTML);

        //Adds comments
        // this.displayComments(post.comments);
    }
    
    displayComments (comments) {

    }
}