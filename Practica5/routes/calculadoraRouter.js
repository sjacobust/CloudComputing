const express = require('express');
const router = express.Router();


/**
 * Checks if the required parameters are being
 * sent in the body, otherwise it sends a json
 * object with 'error' 
 */
const checkParams = (req, res, next) => {
    let params = false;
    switch(req.route.path) {
        case '/resta':
            params = Boolean((req.body.hasOwnProperty('numToSubs') && req.body.hasOwnProperty('nums')));
            break;
        case '/divide':
            params = Boolean((req.body.hasOwnProperty('numToDiv') && req.body.hasOwnProperty('nums')));
            break;
        case '/free':
            params = Boolean(req.body.hasOwnProperty('operation'));
            break;
        default:
            params = Boolean(req.body.hasOwnProperty('nums'));
    };
    if(params) {
        console.log(params);
        next();
    } else {
        res.json({ error: "no args defined"})
    }
};

 /* Route to post suma. Expects one json field, nums.
    It will add (sum) all the numbers in the array and return
    the result
    Example of JSON Body:
    {
        "nums": [7, 3, 5, 7]
    }
    Expected outcome:
    { "respuesta": 22}
 */

router.post('/suma', checkParams, (req, res) => {
    console.log(req.body);
    let respuesta = 0;
    respuesta = req.body.nums.reduce((a, b) => a + b, 0);
    res.json({ respuesta: respuesta });
});

 /* Route to post resta. Expects two json fields, numToSubs and nums
    The latter will substract from the first one.
    Example of JSON Body:
    {
        "numToSubs": 7357,
        "nums": [7, 3, 5, 7]
    }
    Expected outcome:
    { "respuesta": 7335}
 */

router.post('/resta', checkParams, (req, res) => {
    console.log(req.body);
    let respuesta = req.body.numToSubs;
    req.body.nums.forEach(num => {
        respuesta -= num;
    });
    res.json({ respuesta: respuesta });

});

 /* Route to post multiplica. Expects one json fields, nums
    The elements will multiply themselves.
    Example of JSON Body:
    {
        "nums": [7, 3, 5, 7]
    }
    Expected outcome:
    { "respuesta": 735 }
 */

router.post('/multiplica', checkParams, (req, res) => {
    console.log(req.body);
    let respuesta = req.body.nums.reduce((a, b) => (a * b), 0);
    res.json({ respuesta: respuesta });
});

 /* Route to post divide. Expects two json fields, numToDiv and nums
    The latter will substract from the first one.
    Example of JSON Body:
    {
        "numToDiv": 7357,
        "nums": [7, 3, 5, 7]
    }
    Expected outcome:
    { "respuesta": 10.00952380952381}
 */

router.post('/divide', checkParams, (req, res) => {
    console.log(req.body);
    let respuesta = req.body.numToDiv;
    req.body.nums.forEach(num => {
        respuesta /= num;
        console.log(respuesta);
    });
    res.json({ respuesta: respuesta });

});

 /* Route to post free. Expects one json fields, operation.
    This works a little different, the body gets a string with
    operations like:
    Example of JSON Body:
    {
        "operation": "1 * 2 + 3 - 4"
    }
    Expected outcome:
    { "respuesta": 1 }
 */

router.post('/free', checkParams, (req, res) => {
    console.log(req.body);
    let respuesta = eval(req.body.operation);
    res.json({ respuesta: respuesta });

});


module.exports = router;