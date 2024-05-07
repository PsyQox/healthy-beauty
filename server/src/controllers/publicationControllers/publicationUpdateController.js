require('dotenv').config()
const { tbl_publication } = require('../../db')
const { URL_SERVER } = process.env
const fs = require('node:fs')

const publicationUpdateController = async ({ id, title, files, description, tblUserId })=>{


    if(files.length > 0) {
        const publication = await tbl_publication.findByPk(id)
        if (publication) {
          if (publication.images.length > 0) {
            publication.images.forEach((img) => {
              const imageSplit = img.split('/')
              const imageName = imageSplit[imageSplit.length - 1]
              fs.unlinkSync(`./uploads/publicationImg/${imageName}`) 
            })
          }
        }

      const arrayImagesName = files?.map((file)=>{
        const imageURL = `${URL_SERVER}/publicationimage/${file.filename}`
        return imageURL
      })

      const response =  tbl_publication.update({ images:arrayImagesName, title:title, description:description, tblUserId: tblUserId}, {
        where: {
          id: id
        }
      });
      return response
    }else{
      const response =  tbl_publication.update({ title:title, description:description, tblUserId: tblUserId}, {
        where: {
          id: id
        }
      });
      return response
    }
    
    

}

module.exports = publicationUpdateController