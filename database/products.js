

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
  dataArray = dataArray.map((data)=>{
    if(data.id === id){
      console.log('data###',data);
      return {
        id: id,
        name: reqBody.name,
        price: parseFloat(reqBody.price),
        inventory: parseFloat(reqBody.inventory)
      };
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

module.exports = {
  add, dataInput, editProduct, deleteProduct
};