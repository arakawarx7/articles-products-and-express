var articleDataArray = [];

function dataInput(){
  console.log("articleDataArray#####",articleDataArray);
  return articleDataArray;
}

function add(book){
  var data = {
     title: book.title,
    body: book.body,
    author: book.author,
    urlTitle: encodeURI(book.title)
  };
  articleDataArray.push(data);
  console.log("data being inputed",data);
}


function editProduct(reqBody,title){
  articleDataArray = articleDataArray.map((data)=>{
    if(data.title === title){
      console.log('data###',data);
      return {
        title: reqBody.title,
        body: reqBody.body,
        author: reqBody.author,
        urlTitle: encodeURI(reqBody.title)
      };
    }
    return data;
  });
}

function deleteData(title) {
  articleDataArray = articleDataArray.filter((element)=>{
    return  element.title !== title;
  });
}



module.exports = {
   dataInput,
   add,
   deleteData,
   editProduct
};