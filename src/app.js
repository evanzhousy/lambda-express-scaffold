const express = require('express');
const s3 = require('aws-sdk/clients/s3');
const v5 = require('uuid/v5');
const env = require('env-var');
const bodyParser = require('body-parser');

const app = new express();
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: 'Internal Server Error'});
});

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.get('/books', async (req, res) => {
    // const client = newS3Client();
    // const maxItems = req.query.maxItems || 20;
    // const token = req.query.token;
    console.info("/books " + JSON.stringify(req.params))
    res.status(201).json({message: "message"});
});

module.exports = app


