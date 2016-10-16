const db = require ('../connection');

var articleDataArray = [];

function dataInput(){
  console.log("articleDataArray#####",articleDataArray);
  return db.query('SELECT * FROM articles')
  //return articleDataArray;
}

function add(book){
  var data = {
     title: book.title,
    body: book.body,
    author: book.author,
    url_title: encodeURI(book.title)
  };
  return db.query('INSERT INTO articles(title, body, author,url_title) VALUES(${title},${body},${author},${url_title})',data)
  //articleDataArray.push(data);
  // .then(success =>{


  // })
  .catch(error =>{


  })

  console.log("data being inputed",data);
}


function editProduct(reqBody){
  //console.log("body",body);
  console.log("reqbody.body",reqBody);
  //console.log("title",title)
  // articleDataArray = articleDataArray.map((data)=>{
  //   if(data.title === title){
  //     console.log('data###',data);
  //     return {
  //       title: reqBody.title,
  //       body: reqBody.body,
  //       author: reqBody.author,
  //       urlTitle: encodeURI(reqBody.title)
  //     };
  //   }
    return db.query('UPDATE articles SET title = ${title}, body = ${body}, author = ${author} WHERE title = ${title}',reqBody);
}

function deleteData(title) {
  console.log('title',title)
  return db.query('DELETE FROM articles WHERE title = ${title}',title)
  // articleDataArray = articleDataArray.filter((element)=>{
  //   return  element.title !== title;
  // });
}
function getOneProduct(data){
  console.log('data',data)
  return db.query ('SELECT * FROM articles WHERE title = title')

  // return articleDataArray.find((element)=>{
  //   console.log('element',element)

  //   if(element.title === (data)){
  //     return element;
  //   }
  // });
}



module.exports = {
   dataInput,
   add,
   deleteData,
   editProduct,
   getOneProduct
};