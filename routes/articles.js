const express = require('express');
const articles = express.Router();

articles.route('/')
  .get((req,res)=>{
    res.send('get a book');
  })

  .post((req,res)=>{
    console.log(req.body);
    res.send(' post a book');
    console.log('retrieved a book - harry boy');
  })

  .put((req,res)=>{
    res.send(' put a book');
  })

  .delete((req,res)=>{
    res.send('delete a book');
  })


  module.exports = articles;
