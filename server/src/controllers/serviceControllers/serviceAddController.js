const { tbl_service } = require('../../db')

const serviceAddController = async ({ image, name, description, price, tblCategoryId }) => {
    
    const result = await tbl_service.findOrCreate({
        where: {
            name: name,
            tblCategoryId: tblCategoryId
        },
        defaults: { 
            image, 
            name, 
            description, 
            price 
        }
    });

    if (!result[1]) {
        const error = new Error('Duplicate services are not allowed!');
        error.status = 409;
        throw error
    }

    return result
}

module.exports = serviceAddController