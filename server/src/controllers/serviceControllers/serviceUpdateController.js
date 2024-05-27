const path = require('node:path')
require('dotenv').config()
const fs = require('fs')
const { tbl_service } = require('../../db')
const { URL_SERVER } = process.env
const imageExists = require('../../utils/imageExists')

const serviceUpdateController = async ({ id, image, name, description, price, tblCategoryId })=>{
  
  if(image){
    const service = await tbl_service.findByPk(id)
    const imageSplit = service.image.split('/')
    const imageName = imageSplit[imageSplit.length - 1]
    const urlImage = path.join(__dirname, '../../../uploads/serviceImg',imageName)

    const isExist = imageExists(urlImage)
    
    if (isExist) {
        fs.unlinkSync(`./uploads/serviceImg/${imageName}`)
    }

    const imageURL = `${URL_SERVER}/serviceimage/${image}`

    const response =  tbl_service.update({image: imageURL,name:name, description:description, price:price, tblCategoryId: tblCategoryId}, {
      where: {
        id: id
      }
    });
    
    return response

    
  }else{
    const response =  tbl_service.update({name:name, description:description, price:price, tblCategoryId: tblCategoryId}, {
      where: {
        id: id
      }
    });
    
    return response
  }
}

module.exports = serviceUpdateController

