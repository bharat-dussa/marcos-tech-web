// Define a function to handle route changes and load content
function loadContent(route) {
    const content = document.getElementById('content');

    // Load content based on the route
    fetch(route + '.html')
        .then(response => response.text())
        .then(data => {
            content.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading content:', error);
            content.innerHTML = '<p>Content not found.</p>';
        });
}

// Initial route when the page loads
loadContent('#home');

// Add event listeners for navigation links
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const route = link.getAttribute('href');
            loadContent(route);
        });
    });

    // Back button click event
    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', function () {
        loadContent('#home'); // Load the home page when back is clicked
    });
});
