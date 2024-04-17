require('dotenv').config()
const { tbl_publication } = require('../../db')
const { URL_SERVER } = process.env

const publicationAddController = async ({ title, description, files, tblUserId }) => {
    const arrayImagesName = files?.map((file)=>{
        const imageURL = `${URL_SERVER}/publicationimage/${file.filename}`
        return imageURL
    }) || []
    
    if (arrayImagesName.length !== 0) {
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
            description, 
            tblUserId
        });

        return result     
    }
   
}

module.exports = publicationAddController