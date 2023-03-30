const tombol = document.createElement('button');
tombol.innerText = 'Mulai';
tombol.addEventListener('click', function() {
  window.location.href = 'https://www.notion.so/';
});

document.body.appendChild(tombol);

const blink = document.getElementById('blink');
const colors = ['red', 'blue', 'orange', 'purple'];
let currentColorIndex = 0;

setInterval(function() {
  blink.style.color = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length;
}, 500);
