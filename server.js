const express = require('express');
const pug = require('pug');
const products = require('./routes/products');
const articles = require('./routes/articles');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('./public'));
app.use('/products',products);

//set template engine to use Pug
app.set('view engine','pug');

//tell express where our template files live
app.set('views','./templates');


const server = app.listen(PORT,()=>{
  console.log(`server listening on ${PORT}`);
});
