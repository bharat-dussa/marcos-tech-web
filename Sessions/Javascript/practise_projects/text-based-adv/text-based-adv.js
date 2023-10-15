// Add your JavaScript code here
// Text-based adventure game

// Start the game
console.log("Welcome to the Text Adventure Game!");
console.log("You find yourself in a dark forest...");

const choice1 = prompt(
  "Do you want to go deeper into the forest (1) or head back (2)?"
);

if (choice1 === "1") {
  document.body.style.backgroundImage = "url('https://lik.com/cdn/shop/products/Peter-Lik-Deep-Forest-Framed-Recess-Mount_1800x.jpg?v=1585072181')";
  console.log("You venture deeper into the forest...");
  const choice2 = prompt(
    "You come across a river. Do you swim across (1) or look for a bridge (2)?"
  );

  if (choice2 === "1") {
    console.log("You swim across the river and continue your journey.");
  } else if (choice2 === "2") {
    document.body.style.backgroundImage = "url('https://characterq.files.wordpress.com/2011/05/hb1.jpg')";
    console.log("You find a hidden bridge and cross the river safely.");
  } else {
    console.log("Invalid choice. Game over.");
  }
} else if (choice1 === "2") {
  document.body.style.backgroundImage = "url('https://media.istockphoto.com/id/1325433246/video/game-over-text-animation-with-alpha-channel-4k.jpg?s=640x640&k=20&c=aZM_cNmjuXVVkLm12evzXTU0qFhAu3Vh2_2W_h-eq3c=')";
  console.log("You head back out of the forest. Game over.");
} else {
  console.log("Invalid choice. Game over.");
}
