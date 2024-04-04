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

