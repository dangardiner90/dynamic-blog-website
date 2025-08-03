const postsList = document.getElementById('blogDisplay');


const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');

if (posts.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'No posts found.';
    postsList.appendChild(li);
} else {
    posts.reverse().forEach(post => {
        const li = document.createElement('li');

        const titleEl = document.createElement('h2');
        titleEl.textContent = post.title;

        const contentEl = document.createElement('p');
        contentEl.textContent = post.content;

        li.appendChild(titleEl);
        li.appendChild(contentEl);

        if (post.image) {
            const imgEl = document.createElement('img');
            imgEl.src = post.image;
            imgEl.alt = "Post image";
            li.appendChild(imgEl);
        }

        postsList.appendChild(li);
    });
}