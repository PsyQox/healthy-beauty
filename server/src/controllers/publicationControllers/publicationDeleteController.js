const fs = require('node:fs')
const { tbl_publication } = require('../../db')
const path = require('node:path')
const imageExists = require('../../utils/imageExists')

const publicationDeleteController = async (id) => {
    const publication = await tbl_publication.findByPk(id)
    
    if (publication) {
        const images = publication?.images

        if (images.length > 0) {
            images.forEach((img) => {
                const imageSplit = img.split('/')
                const imageName = imageSplit[imageSplit.length - 1]
                const urlImage = path.join(__dirname, '../../../uploads/publicationImg', imageName)
                const isExist = imageExists(urlImage)

                if(isExist){
                    fs.unlinkSync(`./uploads/publicationImg/${imageName}`)
                }
            })    
        }    
    }
    
    
    const result = await tbl_publication.destroy({where: { id: id }});
    
    if (result === 1) {
        return { message: "Delete publication successfully" };
    }else{
        return { message: "There is no publication with that id" };
    }
} 

module.exports = publicationDeleteController