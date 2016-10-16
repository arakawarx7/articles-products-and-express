
const Promise = require('bluebird')
var pgp = require('pg-promise')({
 //Initaliing options
promiseLib : Promise
})

//127.0.0.1 ---> localhost:
var db =pgp(
'postgres://ape_user:1234@localhost:5432/articles_products_and_express'
);


db.query('SELECT * FROM articles')
  .then(articles =>{
    console.log(articles)

  })
  .catch(error =>{
    console.log(error)
  })

let newArticle = {
  title: 'MY FIRST ARTICLE',
  body: "HI MY NAME IS ",
  author: 'Aaron',
  url_title: 'MY%20FIRST%20ARTICLES'
}


db.query('INSERT INTO articles(title, body, author,url_title) VALUES(${title},${body},${author},${url_title})',newArticle)
.then(console.log)
.catch(error=>{
  console.error(error)
})



console.log(db);