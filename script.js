const tombol = document.createElement('button');
tombol.innerText = 'Mulai';
tombol.addEventListener('click', function() {
  window.location.href = 'https://www.notion.so/';
});

document.body.appendChild(tombol);

