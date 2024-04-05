const { tbl_publication } = require('../../db')

const publicationAddController = async ({ title, description, image, tblUserId }) => {
    
    const result = await tbl_publication.create({ 
            title,
            image,  
            description, 
            tblUserId
    });

    return result
}

module.exports = publicationAddController