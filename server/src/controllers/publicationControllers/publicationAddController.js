require('dotenv').config()
const { tbl_publication } = require('../../db')
const { URL_SERVER } = process.env

const publicationAddController = async ({ title, description, files, tblUserId }) => {
 
    if (files.length !== 0) {
        const arrayImagesName = files?.map((file)=>{
            const imageURL = `${URL_SERVER}/publicationimage/${file.filename}`
            return imageURL
        })
        
        const result = await tbl_publication.create({ 
            title,
            images: arrayImagesName,  //images
            description, 
            tblUserId
        });

        return result     
    }else{
        const result = await tbl_publication.create({ 
            title,
            images:files,
            description, 
            tblUserId
        });

        return result     
    }
   
}

module.exports = publicationAddController