document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/assets')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('crypto-list');
      data.data.slice(0, 10).forEach(coin => {
        const div = document.createElement('div');
        div.textContent = `${coin.name} (${coin.symbol}): $${parseFloat(coin.priceUsd).toFixed(2)}`;
        container.appendChild(div);
      });
    })
    .catch(err => console.error('Error loading coins:', err));
});
