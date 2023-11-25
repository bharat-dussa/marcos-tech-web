// Add your JavaScript code here
function validateForm(event) {
  console.log('event:', event);
  
  const form = document.getElementById("myForm");

  let valid = true;

  // Reset error messages
  const errorMessages = form.getElementsByClassName("error-message");
  for (const errorMessage of errorMessages) {
    errorMessage.textContent = "";
  }

  // Validate name
  const nameInput = form.elements["name"];
  if (nameInput.value.trim() === "") {
    displayError(nameInput, "Name is required.");
    valid = false;
  }

  // Validate email
  const emailInput = form.elements["email"];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    displayError(emailInput, "Invalid email address.");
    valid = false;
  }

  // Validate age
  const ageInput = form.elements["age"];
  if (isNaN(ageInput.value) || ageInput.value < 18 || ageInput.value > 99) {
    displayError(ageInput, "Age must be between 18 and 99.");
    valid = false;
  }

  // Validate gender
  const genderInput = form.elements["gender"];
  if (genderInput.value === "") {
    displayError(genderInput, "Please select a gender.");
    valid = false;
  }


  // Validate at least one interest selected
  const interestsInputs = form.elements["interests"];
  const selectedInterests = Array.from(interestsInputs).filter(
    (input) => input.checked
  );
  if (selectedInterests.length === 0) {
    const interestsLabel = form.querySelector('label[for="coding"]');
    displayError(interestsLabel, "Please select at least one interest.");
    valid = false;
  }

  // Display success message if the form is valid
  if (valid) {
    alert("Form submitted successfully!");
  }

  // Prevent the form from submitting if there are errors
  if (!valid) {
    event.preventDefault();
  }
}

function displayError(element, message) {
  const errorContainer = document.createElement("div");  // <div></div>
  errorContainer.className = "error-message"; // <div class="error-message"></div>
  errorContainer.textContent = message; // <div class="error-message">Please select at least one interest.</div>
  element.parentNode.insertBefore(errorContainer, element.nextSibling);
}
