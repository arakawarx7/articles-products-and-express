const express = require('express');
const productModel = require('../database/products');
const router = express.Router();


router.route('/')
.get((req,res)=>{
  var result = productModel.dataInput();
  res.render("index",{
    result});
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
    console.log("reqBody###",req.body);
    console.log("paramsId",req.params.id);
    productModel.editProduct(req.body,req.params.id);
    res.send(' sucess');
  });

router.route('/:id')
.delete((req,res)=>{
  productModel.deleteProduct(req.params.id);
  res.json({sucess: "true"});
});

router.route('/:id/edit')
.get((req,res)=>{
  var results = productModel.dataInput(req.params.id);
  var product = productModel.getOneProduct(req.params.id);
  res.render('edit',{
    product,results
    });
});

router.route('/:id/edit')
.post((req,res)=>{
  productModel.editProduct(req.body,req.params.id);

});

router.route('/new')
.get((req,res)=>{
  res.render('new');
})


.post((req,res)=>{
  productModel.add(req.body);
});


module.exports = router;