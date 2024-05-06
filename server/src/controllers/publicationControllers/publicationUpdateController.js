require('dotenv').config()
const { tbl_publication } = require('../../db')
const { URL_SERVER } = process.env

const publicationUpdateController = ({ id, title, files, description, tblUserId })=>{


    if(files.length > 0) {
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
      const response =  tbl_publication.update({ images:files, title:title, description:description, tblUserId: tblUserId}, {
        where: {
          id: id
        }
      });
      return response
    }
    
    

}

module.exports = publicationUpdateController