const express = require('express');
const config = require('./config');

const app = express();

app.get('/hello', (req, res) => {
    res.send('Holanda que talca?');
});

app.listen(config.port, () => {
    console.log(`API Server Listening on http://localhost:${config.port}`);
});