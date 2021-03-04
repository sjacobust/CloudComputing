/**
 * Autores: Santiago Jacobus y Bryant Gonzalez
 * Materia: Cloud Computing
 * Proyecto: Practica5
 */

const express = require('express');
const app = express();

const { autoresRouter, calculadoraRouter } = require('./routes');

const port = process.env.port || 3000;

// Express middleware detailing the use of JSON for the body.
app.use(express.json());

// Routes, decided to split the two instead of having all of them here.
app.use('/autores', autoresRouter);
app.use('/', calculadoraRouter);


app.listen(port, () => {
    console.log(`App is listening in port ${port}`);
})