const express = require('express');
const path = require('path');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'frontend')));

// Serve the frontend's index.html for all GET requests
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// API endpoint to handle form submission
app.post('/api/data', (req, res) => {
    const { data } = req.body;
    res.json({ message: `Received: ${data}` });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
