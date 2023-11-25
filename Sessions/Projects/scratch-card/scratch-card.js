document.addEventListener("DOMContentLoaded", () => {
    const scratchCard = document.getElementById("scratchCard");
    const scratchCanvas = document.getElementById("scratchCanvas");
    const ctx = scratchCanvas.getContext("2d");
  
    let isDrawing = false;
  
    function startDrawing(e) {
      isDrawing = true;
      draw(e);
    }
  
    function endDrawing() {
      isDrawing = false;
    }
  
    function draw(e) {
      if (!isDrawing) return;
  
      const rect = scratchCanvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      ctx.fillStyle = "#888";
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2);
      ctx.fill();
    }
  
    scratchCanvas.addEventListener("mousedown", startDrawing);
    scratchCanvas.addEventListener("mouseup", endDrawing);
    scratchCanvas.addEventListener("mousemove", draw);
  });
  