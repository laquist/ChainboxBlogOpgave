class HomeView {
    //Adds post previews to page
    displayPosts (posts) {
        const articleContainer = document.querySelector(DOMstrings.home.articleContainer);

        Object.keys(posts).forEach(postKey => {
            const post = posts[postKey];
            const dateString = post.dateOfPost.getDate() + ' ' + months[post.dateOfPost.getMonth()] + ' ' + post.dateOfPost.getFullYear();
            
            //Creates HTML
            const html = `
            <article class="card border-0 mb-4" id="postID-${post.postId}">
                <div class="card-body">
                    <h2 class="articleTitle card-title text-uppercase font-weight-bold my-4">${post.title}</h2>
                    <img class="articleImg card-img-top d-block mx-auto" src="${post.imageUrl}" alt="${post.title}">
                    <p class="card-text mt-5"><time class="articleDate text-white p-1">${dateString}</time></p>
                    <p class="articleText card-text my-2">${post.content}</p>
                    <p class="articleAuthor mt-4">By ${post.postingUser.name}</p>
                </div>
            </article>
            `;

            //Inserts on page
            articleContainer.insertAdjacentHTML('beforeend', html)
        });
    }

    
}