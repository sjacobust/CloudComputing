const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.json({
        autor1: "Santiago José Jacobus Trasviña",
        autor2: "Bryant Gerardo Gonzales Vizcarra"
    })
});

module.exports = router;