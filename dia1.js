
const canvas = document.getElementById("florCanvas");
const ctx = canvas.getContext("2d");

let tiempo = 0;

function dibujarFlor(t) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const centroX = canvas.width / 2;
  const centroY = canvas.height / 2;
  const cantidadPetalos = 5;
  const radio = 20 + Math.sin(t) * 2; 

  for (let i = 0; i < cantidadPetalos; i++) {
    const angulo = (i * 2 * Math.PI) / cantidadPetalos;

    const x = centroX + Math.cos(angulo) * 10;
    const y = centroY + Math.sin(angulo) * 10;

    ctx.beginPath();
    ctx.ellipse(x, y, radio, 10, angulo, 0, 2 * Math.PI);
    ctx.fillStyle = "violet";
    ctx.fill();
    ctx.strokeStyle = "orange";
    ctx.stroke();
  }

  ctx.beginPath();
  ctx.arc(centroX, centroY, 10, 0, 2 * Math.PI);
  ctx.fillStyle = "#6B3528";
  ctx.fill();
}

function animar() {
  tiempo += 0.05;
  dibujarFlor(tiempo);
  requestAnimationFrame(animar);
}

animar();
