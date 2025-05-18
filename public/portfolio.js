document.addEventListener('DOMContentLoaded', () => {
  const portfolio = [
    { name: "Bitcoin", symbol: "BTC", quantity: 0.5, priceUsd: 30000 },
    { name: "Ethereum", symbol: "ETH", quantity: 2, priceUsd: 2000 }
  ];
  const container = document.getElementById('portfolio-container');
  portfolio.forEach(coin => {
    const div = document.createElement('div');
    const total = coin.quantity * coin.priceUsd;
    div.textContent = `${coin.name} (${coin.symbol}): ${coin.quantity} coins - Total: $${total.toFixed(2)}`;
    container.appendChild(div);
  });
});
