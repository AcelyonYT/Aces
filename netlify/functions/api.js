const express = require('express');
const serverless = require('serverless-http');
const path = require('path');

const app = express();

app.get('/api/hello', (req, res) => {
    res.json({ message: "Hello from Express!"});
});

app.use(express.static(path.resolve(__dirname, '../../dist')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../dist', 'index.html'));
});

module.exports.handler = serverless(app);