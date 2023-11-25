 // Function to fetch user data from a fictional API
 function fetchUserData() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => {
        document.getElementById('userProfile').innerText = `Name: ${data.name}, Email: ${data.email}`;
      })
      .catch(error => console.error('Error fetching user data:', error));
  }

  // Event listener for DOMContentLoaded
  /**
   * The DOMContentLoaded event occurs when the initial HTML document has been completely loaded and parsed, 
   * without waiting for stylesheets, images, and subframes to finish loading.
   */
  document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded event fired!');
    // Fetch user data when the DOM content is loaded
    fetchUserData();
  });

  // Event listener for load
  /**
   * The load event occurs when all resources on the page (images, stylesheets, scripts, etc.) 
   * have finished loading.
   */
  window.addEventListener('load', function () {
    console.log('Load event fired!');
    // Additional setup after all resources are loaded
  });

  // Event listener for beforeunload
  /**
   * The beforeunload event is triggered just before the user is about to leave the page.
   * Use Case: Commonly used to show a confirmation message if the user attempts to leave a page with unsaved changes.
   */
  window.addEventListener('beforeunload', function (event) {
    console.log('Beforeunload event fired!');
    // Check if there are unsaved changes and show a confirmation message
    const unsavedChanges = true; // Assume there are unsaved changes
    if (unsavedChanges) {
      const message = 'You have unsaved changes. Are you sure you want to leave?';
      event.returnValue = message;
      return message;
    }
  });

  // Event listener for unload
  /**
   * The unload event is triggered when the page is being unloaded, 
   * either by navigating to another page or closing the browser window/tab.
   */
  window.addEventListener('unload', function () {
    console.log('Unload event fired!');
    // Perform cleanup tasks or send analytics data
  });