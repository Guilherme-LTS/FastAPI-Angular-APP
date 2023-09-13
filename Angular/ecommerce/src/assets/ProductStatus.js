// ProductStatus.js

document.addEventListener("DOMContentLoaded", function() {
  const stockElements = document.querySelectorAll("#stock");
  const statusElements = document.querySelectorAll("#status");

  stockElements.forEach((stockElement, index) => {
    const quantidadeDisponivel = parseInt(stockElement.textContent);
    const quantidadeSugerida = 20;
    const diferenca = quantidadeDisponivel - quantidadeSugerida;

    const statusElement = statusElements[index];

    if (quantidadeDisponivel < quantidadeSugerida) {
      statusElement.innerText = "Vermelho";
      statusElement.style.color = "red";
    } else if (diferenca <= 5) {
      statusElement.innerText = "Amarelo";
      statusElement.style.color = "yellow";
    } else {
      statusElement.innerText = "Verde";
      statusElement.style.color = "green";
    }
  });
});
