const { tbl_category } = require('../../db')


const categoryUpdateController = ({ id, image, name, description })=>{
const response =  tbl_category.update({ image:image, name:name, description:description }, {
    where: {
      id: id
    }
  });
  
  return response
}

module.exports = categoryUpdateController