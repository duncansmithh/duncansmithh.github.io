document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login');
    const blogPage = document.getElementById('blog-page');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        showBlogPage();
    });

    function showBlogPage() {
        loginForm.style.display = 'none'; // Hide the login form
        blogPage.style.display = 'block'; // Show the blog page
    }
    
    
    // Blog Posting
    const blogForm = document.getElementById('blogForm');
    const blogPosts = document.getElementById('blogPosts')

    blogForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const date = document.getElementById('date').value;
        const content = document.getElementById('content').value;

        const newPost = document.createElement('li');

        newPost.innerHTML = `
            <h4>${title}</h4>
            <p>${author} - ${date}</p>
            <p>${content}</p>
        `;

        blogPosts.appendChild(newPost);

        blogForm.reset();
    });
});