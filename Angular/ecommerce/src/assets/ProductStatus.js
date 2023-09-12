document.addEventListener("DOMContentLoaded", function () {
  const estoqueElement = document.getElementById("stock");
  const statusElement = document.getElementById("status");

  if (estoqueElement && statusElement) {
    const quantidadeDisponivel = parseInt(estoqueElement.innerText);
    const quantidadeSugerida = 20; // Substitua pelo valor sugerido desejado

    const diferenca = quantidadeDisponivel - quantidadeSugerida;

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
  }
});
