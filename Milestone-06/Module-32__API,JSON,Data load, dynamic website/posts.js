

const loadPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => displayPost(data));
}

const displayPost = (posts) => {
    // get the post container
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = "";


    posts.forEach ((post) => {

        // Making Inner HTML
        const postCard = document.createElement('div')
        postCard.innerHTML = `
            <div id="post-card">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>            
        `;
            
        // append child
        postContainer.appendChild(postCard);
    })
}