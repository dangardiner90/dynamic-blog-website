// Displaying posts on the home page

const blogDisplay = document.getElementById('blogDisplay');

const posts = JSON.parse(localStorage.getItem('newPost'));

posts.forEach(post => {
    const li = document.createElement('li');
    blogDisplay.appendChild(li);

    const title = document.createElement('h2');
    title.textContent = post.title;
    li.appendChild(title);

    const content = document.createElement('p');
    content.textContent = post.content;
    li.appendChild(content);

    if (post.image) {
        const img = document.createElement('img');
        img.src = post.image;
        img.alt = "Post image";
        li.appendChild(img);
    }

});