const express = require('express');
const router = express.Router();

router.post('/suma', (req, res) => {
    console.log(req.body);
    let respuesta = 0;
    if(req.body.hasOwnProperty('nums')) {
        respuesta  = req.body.nums.reduce((a, b) => a + b, 0);
    } else {
        respuesta = "ARGS not defined";
    }
    res.json({ respuesta: respuesta });
});

router.post('/resta', (req, res) => {

});

router.post('/multiplica', (req, res) => {

});

router.post('/divide', (req, res) => {

});

router.post('/free', (req, res) => {

});

module.exports = router;