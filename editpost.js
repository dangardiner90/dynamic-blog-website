// Editing and deleting posts

const editPosts = document.getElementById('editPosts');
let blogPost = JSON.parse(localStorage.getItem('newPost'));


function editBlog(id) {
  const title = document.getElementById(`title-${id}`).value;
  const content = document.getElementById(`content-${id}`).value;

  const index = blogPost.findIndex(p => p.id === id);
  if (index !== -1) {
    blogPost[index].title = title;
    blogPost[index].content = content;
    localStorage.setItem('newPost', JSON.stringify(blogPost));
  }
}

function delBlog(id) {
  blogPost = blogPost.filter(p => p.id !== id);
  localStorage.setItem('newPost', JSON.stringify(blogPost));
  showPost();
}

function showPost() {
  editPosts.innerHTML = '';

  blogPost.forEach(post => {
    const postBox = document.createElement('div');

    postBox.style.padding = '2em';

    postBox.innerHTML =

      `<div style="display: flex; flex-direction: column; gap: 10px;">
    <label>
      <strong>Title:</strong><br>
      <input type="text" id="title-${post.id}" value="${post.title}" style="width: 40%; padding: 6px;">
    </label>

    <label>
      <strong>Content:</strong><br>
      <textarea id="content-${post.id}" rows="6" style="width: 40%; padding: 6px;">${post.content}</textarea>
    </label>

    ${post.image ? `<div><strong>Image:</strong><br><img src="${post.image}" alt="Post image" style="max-width: 40%; border: 1px solid #aaa; border-radius: 4px;"></div>` : ''}

    <div style="display: flex; gap: 10px; margin-top: 10px;">
      <button onclick="editBlog(${post.id})" style="padding: 10px 10px;">✎ Edit</button>
      <button onclick="delBlog(${post.id})" style="padding: 10px 10px;">👉🏻🗑️ Delete</button>
    </div>
  </div> `

    editPosts.appendChild(postBox);
  });

}

showPost();