// Create posts

document.getElementById('new-post').addEventListener('submit', function () {

  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const image = document.getElementById('image');
  const file = image.files[0];

  function createBlog(title, content, imageSave) {
    const post = {
      id: Date.now(),
      title,
      content,
      image: imageSave
    };
    const existingPosts = JSON.parse(localStorage.getItem('newPost'));
    existingPosts.push(post);
    localStorage.setItem('newPost', JSON.stringify(existingPosts));
  }

  if (file) {
    const readFile = new FileReader();
    readFile.onload = function () {
      const imageSave = readFile.result;
      createBlog(title, content, imageSave);
    };
    readFile.readAsDataURL(file);
  } else {
    createBlog(title, content, null);
  }

});



