// Create posts

document.getElementById('new-post').addEventListener('submit', function (e) {
      e.preventDefault();

      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;
      const imageInput = document.getElementById('image');
      const file = imageInput.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = function () {
          const imageData = reader.result;
          savePost(title, content, imageData);
        };
        reader.readAsDataURL(file);
      } else {
        savePost(title, content, null);
      }

      function savePost(title, content, imageData) {
        const post = {
          id: Date.now(),
          title,
          content,
          image: imageData
        };

        const existingPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
        existingPosts.push(post);
        localStorage.setItem('blogPosts', JSON.stringify(existingPosts));

        alert('Post saved!');
       
      }
    });



