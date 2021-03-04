const express = require('express');
const app = express();

const { autoresRouter, calculadoraRouter } = require('./routes');

const port = process.env.port || 3000;

app.use(express.json())

app.use('/autores', autoresRouter);
app.use('/', calculadoraRouter);

app.listen(port, () => {
    console.log(`App is listening in port ${port}`);
})