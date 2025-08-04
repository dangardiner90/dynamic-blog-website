  const container = document.getElementById('managePosts');
    let posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');

    function renderPosts() {
      container.innerHTML = '';

      if (posts.length === 0) {
        container.innerHTML = '<p>No posts to manage.</p>';
        return;
      }

      posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.style.border = '1px solid #ccc';
        postDiv.style.marginBottom = '1em';
        postDiv.style.padding = '1em';

        postDiv.innerHTML = `
          <input type="text" value="${post.title}" id="title-${post.id}" /><br><br>
          <textarea rows="4" cols="40" id="content-${post.id}">${post.content}</textarea><br><br>
          ${post.image ? `<img src="${post.image}" style="max-width:300px;"><br><br>` : ''}
          <button onclick="updatePost(${post.id})">Save Changes</button>
          <button onclick="deletePost(${post.id})">Delete</button>
        `;

        container.appendChild(postDiv);
      });
    }

    function updatePost(id) {
      const title = document.getElementById(`title-${id}`).value;
      const content = document.getElementById(`content-${id}`).value;

      const index = posts.findIndex(p => p.id === id);
      if (index !== -1) {
        posts[index].title = title;
        posts[index].content = content;
        localStorage.setItem('blogPosts', JSON.stringify(posts));
        alert('Post updated!');
      }
    }

    function deletePost(id) {
      if (!confirm('Are you sure you want to delete this post?')) return;
      posts = posts.filter(p => p.id !== id);
      localStorage.setItem('blogPosts', JSON.stringify(posts));
      renderPosts();
    }

    renderPosts();