require('dotenv').config()
const { tbl_service } = require('../../db')
const { URL_SERVER } = process.env

const serviceAddController = async ({ image, name, description, price, tblCategoryId }) => {

    const imageURL = `${URL_SERVER}/serviceimage/${image}`

    const result = await tbl_service.findOrCreate({
        where: {
            name: name,
            tblCategoryId: tblCategoryId
        },
        defaults: { 
            image:imageURL, 
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

    return result[0]
}

module.exports = serviceAddController