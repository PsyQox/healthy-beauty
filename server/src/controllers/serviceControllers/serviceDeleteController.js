const fs = require('node:fs')
const path = require('node:path')
const { tbl_service } = require('../../db')
const imageExists = require('../../utils/imageExists')

const serviceDeleteController = async (id) => {
    const service = await tbl_service.findByPk(id)
    const imageSplit = service.image.split('/')
    const imageName = imageSplit[imageSplit.length - 1]
    const urlImage = path.join(__dirname, '../../../uploads/serviceImg',imageName)

    const isExist = imageExists(urlImage)
    
    if (isExist) {
        fs.unlinkSync(`./uploads/serviceImg/${imageName}`)
    }



    const result = await tbl_service.destroy({where: { id: id }});

    if (result === 1) {
        return { message: "Delete service successfully" };
    }else{
        return { message: "There is no service with that id" };
    }
} 

module.exports = serviceDeleteController 