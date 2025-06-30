// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Basic route for the home page (which will serve index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const server = app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    console.log('Serving files from:', path.join(__dirname, 'public'));
});

// Export the server for testing purposes
module.exports = server;
