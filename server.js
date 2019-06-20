const express = require('express');
const path = require('path');

const app = express();

// Serve static assets
app.use(express.static(path.resolve(__dirname, 'dist/anguljar')));

// Always return index.html, react-router takes control
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist/anguljar', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
