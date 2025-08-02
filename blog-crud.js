const postsList = document.getElementById('posts-div');

const posts = {
    title: '',
    content: '',
    image: ''
};

posts.forEach(post => {
    const postItem = document.createElement('li');
    postItem.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p><img>${post.image}</img>`
});

