const express = require('express');
const { Router } = express;
const router = new Router();
const bodyParser = require('body-parser');
const CartManager = require('../api/cart/cartManager');


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', async (req, res)  => {

    res.render('index', {})

})

module.exports = router