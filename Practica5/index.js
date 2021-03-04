const express = require('express');
const app = express();

const { autoresRouter } = require('./routes');

const port = process.env.port || 3000;

app.use('/Autores', autoresRouter);