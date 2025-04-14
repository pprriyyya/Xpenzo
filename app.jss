// Fetch transactions from backend
async function fetchTransactions() {
  const response = await fetch('http://localhost:5000/api/transactions');
  const data = await response.json();
  renderTransactions(data);
}

function renderTransactions(transactions) {
  const container = document.getElementById('transactions');
  transactions.forEach(transaction => {
    const div = document.createElement('div');
    div.className = 'transaction';
    div.innerHTML = `
      <p>${transaction.category}: $${transaction.amount}</p>
    `;
    container.appendChild(div);
  });
}

fetchTransactions();