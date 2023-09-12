// Supondo que você tenha um array de objetos com os dados das vendas
const salesData = [
    { dataHora: '2022-01-01 10:00', usuario: 'João', quantidade: 3 },
    { dataHora: '2022-01-02 15:30', usuario: 'Maria', quantidade: 5 },
    // ...
  ];
  
  // Função para criar uma nova linha da tabela com base nos dados de venda
  function createSalesRow(sale) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${sale.dataHora}</td>
      <td>${sale.usuario}</td>
      <td>${sale.quantidade}</td>
    `;
    return row;
  }
  
  // Função para exibir as linhas da tabela de Histórico de Vendas
  function displaySalesHistory() {
    // Seleciona o elemento tbody da tabela de Histórico de Vendas
    const salesHistoryTable = document.getElementById('sales-history-body');
  
    // Limpa o conteúdo atual do tbody
    salesHistoryTable.innerHTML = '';
  
    // Itera sobre os dados de venda e cria as linhas da tabela
    salesData.forEach((sale) => {
      const row = createSalesRow(sale);
      salesHistoryTable.appendChild(row);
    });
  }
  
  // Chama a função para exibir as linhas da tabela de Histórico de Vendas
  displaySalesHistory();
  