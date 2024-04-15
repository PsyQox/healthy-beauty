require('dotenv').config()
const { tbl_category } = require('../../db')
const { URL_SERVER } = process.env

const categoryUpdateController = ({ id, image, name, description })=>{
  if (image) {
    const imageURL = `${URL_SERVER}/categoryimage/${image}`
    const response = tbl_category.update({ image:imageURL, name:name, description:description }, {
      where: {
        id: id
      }
    });    
    return response
  }else{
    const response = tbl_category.update({name:name, description:description}, {
      where: {
        id: id
      }
    })
    return response
  }

  
}

module.exports = categoryUpdateController