function abrirCarta() {
  document.querySelector('.carta').style.display = 'none';
  document.querySelector('#contenido').style.display = 'block';
}

function moverBoton() {
  const btnNo = document.getElementById('btnNo');
  const x = Math.random() * (window.innerWidth - btnNo.clientWidth);
  const y = Math.random() * (window.innerHeight - btnNo.clientHeight);
  btnNo.style.position = 'absolute';
  btnNo.style.left = `${x}px`;
  btnNo.style.top = `${y}px`;
}

function mostrarRespuesta() {
  document.getElementById('contenido').style.display = 'none';
  document.getElementById('respuesta').style.display = 'block';
}
