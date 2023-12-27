const { tbl_category } = require('../../db')

const categoryGetController = () => {
    const categories = tbl_category.findAll()
    return categories
}

module.exports = categoryGetController