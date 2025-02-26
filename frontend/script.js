document.getElementById('dataForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const inputData = document.getElementById('inputData').value;

    try {
        const response = await fetch('/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data: inputData })
        });

        const result = await response.json();
        document.getElementById('responseText').innerText = result.message;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('responseText').innerText = 'Error submitting data.';
    }
});
