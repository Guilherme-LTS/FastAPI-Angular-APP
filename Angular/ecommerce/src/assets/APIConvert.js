async function getConversionRate() {
  const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
  const data = await response.json();
  console.log('Conversion Rate Data:', data);

  return data.USDBRL.ask;
}

function convertPrice() {
  const priceInReaisElement = document.getElementById('price-reais');
  const priceInDollarsElement = document.getElementById('price-dollars');

  const priceInReais = parseFloat(priceInReaisElement.textContent);

  getConversionRate().then((conversionRate) => {
    const priceInDollars = priceInReais / conversionRate;
    priceInDollarsElement.textContent = priceInDollars.toFixed(2);
  });
}

// Chame a função convertPrice após 3 segundos (3000 milissegundos) que a página for carregada
setTimeout(convertPrice, 1000);
