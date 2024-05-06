const fs = require('node:fs')
const { tbl_publication } = require('../../db')

const publicationDeleteController = async (id) => {
    const publication = await tbl_publication.findByPk(id) 
    const images = publication?.images

    if (images) {
        images.map((img) => {
            const imageSplit = img.split('/')
            const imageName = imageSplit[imageSplit.length - 1]
            fs.unlinkSync(`./uploads/publicationImg/${imageName}`)
            
        })    
    }
    
    const result = await tbl_publication.destroy({where: { id: id }});
    
    if (result === 1) {
        return { message: "Delete publication successfully" };
    }else{
        return { message: "There is no publication with that id" };
    }
} 

module.exports = publicationDeleteController