let contador = 0;

function aumentarContador() {
  contador++;
  document.getElementById("contador").innerText = contador;
}

document
  .getElementById("btn-contar")
  .addEventListener("click", aumentarContador);

function diminuirContador() {
  contador--;
  document.getElementById("contador").innerText = contador;
}
document
  .getElementById("btn-contar2")
  .addEventListener("click", diminuirContador);
