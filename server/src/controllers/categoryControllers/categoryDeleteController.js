const {tbl_category} = require('../../db')
const fs = require('fs')
const path = require('node:path')
const imageExists = require('../../utils/imageExists')

const categoryDeleteController = async (id) => {
    const category = await tbl_category.findByPk(id)
    if (category) {
        const imageSplit = category.image.split('/')
        const imageName = imageSplit[imageSplit.length - 1]
        const urlImage = path.join(__dirname, '../../../uploads/categoryImg', imageName)
        const isExist = imageExists(urlImage)
        if(isExist){
            
            fs.unlinkSync(`./uploads/categoryImg/${imageName}`)
        }   
    }
    
    const result = await tbl_category.destroy({where: {id: id}})
    if (result === 1) {
        return { message: "Delete category successfully" }
    }else{
        return { message: "There is no category with that id" }
    }
} 

module.exports = categoryDeleteController 