const { tbl_service } = require('../../db')


const serviceUpdateController = ({ id, image, name, description, price, tblCategoryId })=>{
  
  const response =  tbl_service.update({ image:image, name:name, description:description, price:price, tblCategoryId: tblCategoryId}, {
    where: {
      id: id
    }
  });
  
  return response
}

module.exports = serviceUpdateController


// "image": "URL"<,
// "name" : "Canino",
// "description": "none",
// "price": 1,
// "tblCategoryId": "4c0079e4-2c4f-4a80-a7c1-b0be0865b6c8"