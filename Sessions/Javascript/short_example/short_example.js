  // Get a reference to the button element
  var colorButton = document.getElementById("colorButton");

  // Function to change the background color
  function changeBackgroundColor() {
      // Generate a random color using RGB values
      var red = Math.floor(Math.random() * 256);
      var green = Math.floor(Math.random() * 256);
      var blue = Math.floor(Math.random() * 256);

      // Apply the new color to the body background
      document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
  }

  // Add a click event listener to the button
  colorButton.addEventListener("click", changeBackgroundColor);