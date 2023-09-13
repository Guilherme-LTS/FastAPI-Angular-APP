// Primeiro, vamos criar uma função para obter a taxa de conversão atual de USD para BRL
async function getConversionRate() {
  const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
  const data = await response.json();
  console.log('Conversion Rate Data:', data);

  return data.USDBRL.ask;
}

// Em seguida, vamos criar uma função para converter o preço em reais para dólares
async function convertPrice() {
  const priceInReaisElement = document.getElementById('price-reais');
  const priceInDollarsElement = document.getElementById('price-dollars');

  const priceInReais = parseFloat(priceInReaisElement.textContent);
  const conversionRate = await getConversionRate();

  const priceInDollars = priceInReais / conversionRate;
  priceInDollarsElement.textContent = priceInDollars.toFixed(2);
}

// Finalmente, vamos chamar a função convertPrice quando a página for carregada
window.onload = convertPrice;
