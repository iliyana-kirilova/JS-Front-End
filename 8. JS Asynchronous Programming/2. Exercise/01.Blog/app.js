function attachEvents() {
    const postsUrl = "http://localhost:3030/jsonstore/blog/posts";
    const commentsUrl = "http://localhost:3030/jsonstore/blog/comments";

    const loadPostsButton = document.getElementById("btnLoadPosts");
    const postsSelect = document.getElementById("posts");
    const viewPostButton = document.getElementById("btnViewPost");

    const postTitle= document.querySelector("h1#post-title");
    const postBody = document.querySelector("p#post-body");
    const commentsList = document.querySelector("ul#post-comments");

    loadPostsButton.addEventListener("click", async ()=>{
        const getPostsResponse = await fetch(postsUrl);
        const posts = await getPostsResponse.json();

        postsSelect.textContent = "";
        for(const post of Object.values(posts)){
            const  postOption = document.createElement("option");
            postOption.value = post.id;
            postOption.textContent = post.title;

            postsSelect.appendChild(postOption);
        }
    });

    viewPostButton.addEventListener("click", async ()=>{
        const postId = postsSelect.value;
        if(!postId) return;
        
        const getPostsResponse = await fetch(postsUrl);
        const posts = await getPostsResponse.json();

        const getCommentsResponse = await fetch(commentsUrl);
        const comments = await getCommentsResponse.json();

        const selectPosts = posts[postId];
        const selectedComments = Object.values(comments).filter((c)=>c.postId ===postId);

        postTitle.textContent = selectPosts.title;
        postBody.textContent = selectPosts.body;
        commentsList.replaceChildren();
        for(const comment of selectedComments){
            const listItem = document.createElement("li");
            listItem.id = comment.id;
            listItem.textContent = comment.text;

            commentsList.appendChild(listItem);
        }


    })
}

attachEvents();