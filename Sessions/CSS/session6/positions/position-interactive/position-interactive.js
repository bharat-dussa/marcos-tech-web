const box = document.getElementById("myBox");
const positionButtons = document.querySelectorAll(".positionButton");
const resetButton = document.getElementById("resetButton");
const positionSlider = document.getElementById("positionSlider");
const topSlider = document.getElementById("topSlider");
const bottomSlider = document.getElementById("bottomSlider");
const leftSlider = document.getElementById("leftSlider");
const rightSlider = document.getElementById("rightSlider");
const paratext = document.getElementById("position");

let currentPosition = "static";

// Function to update position based on selected position button
const setPosition = (position) => {
    box.style.position = position;
    currentPosition = position;
    position.innerText = position;
    paratext.innerText = position;
};

// Event listeners for position buttons
positionButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const position = button.getAttribute("data-position");
        setPosition(position);
    });
});

// Event listeners for sliders
topSlider.addEventListener("input", () => {
    const sliderValue = parseInt(topSlider.value);
    box.style.top = `${sliderValue}px`;
});

bottomSlider.addEventListener("input", () => {
    const sliderValue = parseInt(bottomSlider.value);
    box.style.bottom = `${sliderValue}px`;
});

leftSlider.addEventListener("input", () => {
    const sliderValue = parseInt(leftSlider.value);
    box.style.left = `${sliderValue}px`;
});

rightSlider.addEventListener("input", () => {
    const sliderValue = parseInt(rightSlider.value);
    box.style.right = `${sliderValue}px`;
});

resetButton.addEventListener("click", () => {
    setPosition("static");
    positionSlider.value = 0;
    topSlider.value = 0;
    bottomSlider.value = 0;
    leftSlider.value = 0;
    rightSlider.value = 0;
    box.style.top = "0";
    box.style.bottom = "0";
    box.style.left = "0";
    box.style.right = "0";
});
