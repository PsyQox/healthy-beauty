require('dotenv').config()
const fs = require('fs')
const { tbl_category } = require('../../db')
const { URL_SERVER } = process.env

const categoryUpdateController = async ({ id, image, name, description })=>{
  if (image) {

    const category = await tbl_category.findByPk(id)
    const imageSplit = category.image.split('/')
    const imageName = imageSplit[imageSplit.length - 1]
    fs.unlinkSync(`./uploads/categoryImg/${imageName}`)

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