document.addEventListener("DOMContentLoaded", () => {
    const pencilImage = "./images/pencil.png";
    const eraserImage = "./images/eraser.png";
  
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    let painting = false;
    let erasing = false;
  
    // Set the initial background color
    context.fillStyle = "#fff";
    context.fillRect(0, 0, canvas.width, canvas.height);
  
    function startPosition(e) {
      if (erasing) {
        context.globalCompositeOperation = "destination-out";
      } else {
        context.globalCompositeOperation = "source-over";
      }
  
      painting = true;
      draw(e);
    }
  
    function endPosition() {
      painting = false;
      context.beginPath();
    }
  
    function draw(e) {
      if (!painting) return;
  
      context.lineWidth = 8;
      context.lineCap = "round";
      context.strokeStyle = erasing ? "#fff" : "black";
  
      if (erasing) {
        context.lineWidth = 10;
        drawEraserCursor(e.clientX, e.clientY);
      }
  
      context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      context.stroke();
      context.beginPath();
      context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }
  
    function drawEraserCursor(x, y) {
        context.beginPath();
        context.arc(x - canvas.offsetLeft, y - canvas.offsetTop, 5, 0, 2 * Math.PI);
        context.strokeStyle = "black";
        context.lineWidth = 2;
        // context.fillStyle = "rgba(255, 255, 255, 0.5)"; // Adjust alpha for transparency
        context.fill();
        context.stroke();
    }
  
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", endPosition);
    canvas.addEventListener("mousemove", draw);
  
    // Download functionality
    const downloadButton = document.getElementById("downloadButton");
    const formatSelector = document.getElementById("format");
  
    downloadButton.addEventListener("click", () => {
      const format = formatSelector.value;
      const dataURL = canvas.toDataURL(`image/${format}`);
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = `handwritten-notes.${format}`;
      link.click();
    });
  
    // Toggle between brush and eraser
    const brushButton = document.getElementById("brushButton");
    const eraserButton = document.getElementById("eraserButton");
  
    brushButton.addEventListener("click", () => {
      erasing = false;
      brushButton.style.fontWeight = "bold";
      eraserButton.style.fontWeight = "normal";
      document.body.style.cursor = `url('${pencilImage}') 5 5, auto`;
    });
  
    eraserButton.addEventListener("click", () => {
      erasing = true;
      context.lineWidth = 10;
    //   document.body.style.cursor = "none"; // Hide the system cursor
      eraserButton.style.fontWeight = "bold";
      brushButton.style.fontWeight = "normal";
    });
  });
  