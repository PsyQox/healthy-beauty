const { tbl_category } = require('../../db')

const categoryAddController = async ({ image, name, description }) => {
    
    const result = await tbl_category.findOrCreate({
        where: {
            name: name
        },
        defaults:{
            image,  
            description 
        }})
    
    if (!result[1]) {
        const error = new Error('Duplicate services are not allowed!');
        error.status = 409;
        throw error
    }
        
    return result[0]
}

module.exports = categoryAddController