const express = require('express');
const ProductManager = require('../api/productManager/ProductManager');
const { Router } = express
const router = new Router()

router.get('/', async (req, res) => {
    // Obtener los productos del ProductManager
    const product = new ProductManager()
    let products = await product.getProducts()
    console.log(products)
  
    // Renderizar la plantilla Handlebars con los datos
    res.render('home', { products });
  });
  
module.exports = router