const { tbl_publication } = require('../../db')

const publicationDeleteController = async (id) => {
    
    const result = await tbl_publication.destroy({where: { id: id }});

    if (result === 1) {
        return { message: "Delete publication successfully" };
    }else{
        return { message: "There is no publication with that id" };
    }
} 

module.exports = publicationDeleteController