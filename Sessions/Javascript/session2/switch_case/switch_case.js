// Add your JavaScript code here
const dayOfWeek = prompt("Enter a day of the week:");

let response;
var name;
switch (dayOfWeek.toLowerCase()) {
  case "monday":
    response = "Ugh, it's Monday...";
    break;
  case "tuesday":
    response = "Just another Tuesday.";
    break;
  case "wednesday":
    response = "Hump day!";
    break;
  case "thursday":
    response = "Almost there, it's Thursday!";
    break;
  case "friday":
    response = "TGIF! It's Friday!";
    break;
  case "saturday":
    response = "Yay, it's Saturday!";
    break;
  case "sunday":
    response = "Lazy Sunday!";
    break;
  default:
    response = "I'm not sure what day that is.";
}

alert(response);

function hello () {
  console.log("Hello")
}
