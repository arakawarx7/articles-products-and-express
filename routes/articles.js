const express = require('express');
const articlesRouter = express.Router();
const productModel = require('../database/articles');



articlesRouter.route('/')
  .get((req,res)=>{

    var result = productModel.dataInput()
    .then(result =>{
      res.render("index",{
      result
    })
  });
});

articlesRouter.route('/')
  .post((req,res)=>{
    productModel.add(req.body)
    .then(() =>{
      res.json({ success: 'posted'});
    });
  });

articlesRouter.route('/:title')
  .put((req,res)=>{
    productModel.editProduct(req.body,req.params.title)
    .then(() =>{
      res.json({ success: 'posted'});
    });
  });


articlesRouter.route('/:title')
  .delete((req,res)=>{
    productModel.deleteData(req.params.title)
    .then(() =>{
      res.json({ success: 'posted'});
    });
  });


articlesRouter.route('/:title/edit')
  .get((req,res)=>{
    var results = productModel.dataInput(req.params.title);
    var article = productModel.getOneProduct(req.params.title)
    .then(results =>{
    console.log("results",results)
    res.render('edit',{
      results,article
    })
  });
})


articlesRouter.route('/:title/edit')
  .post((req,res)=>{
    req.body.title = req.params.title;
    productModel.editProduct(req.body)
    .then(() =>{
      res.json({ success: 'posted'});
    });
  });

articlesRouter.route('/new')
.get((req,res)=>{
  res.render('new');
})


.post((req,res)=>{
  productModel.add(req.body);
});



  module.exports = articlesRouter;
