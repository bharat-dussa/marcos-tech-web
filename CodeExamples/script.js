document.addEventListener('DOMContentLoaded', function() {
    const firecrackerVideo = document.getElementById('firecrackerVideo');
    const diwaliText = document.getElementById('diwaliText');
    const diwaliVideo = document.getElementById('diwaliVideo');
  
    // Play firecracker video
    firecrackerVideo.play();
  
    // After 1s, hide firecracker video, show "Happy Diwali" text, and play Diwali wishes video
    setTimeout(() => {
      firecrackerVideo.classList.add('hidden');
      diwaliText.classList.remove('hidden');
      diwaliVideo.play();
    }, 1000);
  });
  