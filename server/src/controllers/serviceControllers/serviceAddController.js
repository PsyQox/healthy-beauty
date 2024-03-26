const { tbl_category } = require('../../db')

const categoryAddController = ({ image, name, description }) => {
    
    const result = tbl_category.create({ image, name, description })

    return result
}

module.exports = categoryAddController