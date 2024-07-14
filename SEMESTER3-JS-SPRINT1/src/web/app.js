document.getElementById('tokenForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
  
    const response = await fetch('/generate-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username })
    });
  
    const result = await response.json();
    document.getElementById('tokenResult').innerText = result.token ? `Token: ${result.token}` : `Error: ${result.error}`;
  });
  