

var id = 1;
var dataArray=[];


function add(body){
  var data = {
    id: parseInt(id),
    name: body.name,
    price: parseInt(body.price),
    inventory: parseInt(body.inventory)
  };
  dataArray.push(data);
  id = id + 1;
}

function dataInput(){
  console.log('dataArray', dataArray);
  return dataArray;
}

function editProduct(reqBody,id){
  console.log("insideFUcntionreqBody",reqBody);
  console.log("insidfucntionid",id);
  dataArray = dataArray.map((data)=>{
    if(data.id === parseInt(id)){
      console.log('data###',data);
      return {
        id: id,
        name: reqBody.name,
        price: parseFloat(reqBody.price),
        inventory: parseFloat(reqBody.inventory)
      };
      console.log("test",test);

    }
    return data;
  });
}

function deleteProduct(id){
  dataArray = dataArray.filter((element)=>{
    console.log('data array is',id);
    console.log('element is',element.id);
    return element.id !== parseFloat(id);
  });
}

function getOneProduct(data){
  return dataArray.find((element)=>{
    if(element.id === parseFloat(data)){
      return element;
    }
  });
}



module.exports = {
  add, dataInput, editProduct, deleteProduct,getOneProduct
};