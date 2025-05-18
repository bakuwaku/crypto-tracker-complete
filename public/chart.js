async function loadChart() {
  const coinId = document.getElementById('coin_id').value;
  const response = await fetch(`https://api.coincap.io/v2/assets/${coinId}/history?interval=d1`);
  const data = await response.json();

  const labels = data.data.map(entry => new Date(entry.time).toLocaleDateString());
  const prices = data.data.map(entry => parseFloat(entry.priceUsd));

  const ctx = document.getElementById('priceChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: `${coinId.toUpperCase()} Daily Price`,
        data: prices,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
        fill: false
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });
}
