const { tbl_publication } = require('../../db')

const publicationAddController = async ({ title, description, files, tblUserId }) => {
    const arrayImagesName = files?.map((file)=>{
        return file.filename
    })

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