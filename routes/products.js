const express = require('express');
const productModel = require('../database/products');
const router = express.Router();


router.route('/')
.get((req,res)=>{
  res.json(productModel.dataInput());
  //res.render("index",{});
});

router.route('/')
.post((req,res)=>{
  productModel.add(req.body);
  return res.json({
    "sucess":true
  });
});

router.route('/:id')
  .put((req,res)=>{
    productModel.editProduct(req.body,req.params.id);
    res.send(' put a book');
  });

router.route('/:id')
.delete((req,res)=>{
  productModel.deleteProduct(req.params.id);
  res.json({sucess: "true"});
});



module.exports = router;