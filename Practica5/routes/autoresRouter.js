const express = require('express');
const router = express.Router();

// Autores route, it just returns a json with our names
router.get('/', (req, res) => {
    res.json({
        autor1: "Santiago José Jacobus Trasviña",
        autor2: "Bryant Gerardo Gonzales Vizcarra"
    })
});

module.exports = router;