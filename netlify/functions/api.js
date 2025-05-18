const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

router.get('/hello', (req, res) => {
    res.json({ message: "Hello from Express!"});
});

app.use('/', router);

module.exports.handler = serverless(app);