const blink = document.getElementById('blink');
const colors = ['red', 'blue', 'orange', 'purple'];
let currentColorIndex = 0;

setInterval(function() {
  blink.style.color = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length;
}, 1000);
