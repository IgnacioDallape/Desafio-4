const express = require('express');
const ProductManager = require('../api/productManager/ProductManager');
const { Router } = express
const router = new Router()

router.get('/', async (req, res) => {
  try{
      const product = new ProductManager()
      let products = await product.getProducts()
      console.log(products)
    
      res.render('home', { products });
  } catch (err){
      console.log(err)
  }
  });
  
module.exports = router