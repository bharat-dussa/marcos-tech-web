// Simple routing logic
function navigateTo(route) {
    const content = document.getElementById('content');
    fetch(`${route}.html`)
        .then(response => response.text())
        .then(html => {
            content.innerHTML = html;
        })
        .catch(error => console.error(`Error loading ${route}: ${error}`));
}

// Initial page load
document.addEventListener('DOMContentLoaded', () => {
    navigateTo('home');
});

// Navigation event listeners
document.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        event.preventDefault();
        const route = event.target.getAttribute('href').substring(1);
        navigateTo(route);
    }
});
