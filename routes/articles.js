const express = require('express');
const articlesRouter = express.Router();
const productModel = require('../database/articles');



articlesRouter.route('/')
  .get((req,res)=>{
    console.log("TEST GET");
   res.json(productModel.dataInput());

  });

articlesRouter.route('/')
  .post((req,res)=>{
    productModel.add(req.body);
    res.send(' success posted');
  });

articlesRouter.route('/:title')
  .put((req,res)=>{
    productModel.editProduct(req.body,req.params.title);
    res.send(' put a book');
  });

articlesRouter.route('/:title')
  .delete((req,res)=>{
    productModel.deleteData(req.params.title);
    res.send('delete a book');
  });


  module.exports = articlesRouter;
