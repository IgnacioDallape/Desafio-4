const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const ProductManager = require('../api/productManager/ProductManager');


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', async (req, res) => {
    try {
        res.render('realtimeproducts', {})
        next()
    } catch (err) {
        console.log(err)
    }
})

module.exports = router


