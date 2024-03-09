const { tbl_category } = require('../../db')
const {Op} = require('sequelize')

const categoryGetController = (categoryName) => {
    if (categoryName) {
        const categories = tbl_category.findAll({where:{
            name:{
                [Op.iLike]: `%${categoryName}%`
            }
        }})
        return categories
    }else{
        const categories = tbl_category.findAll()
        return categories
    }
}

module.exports = categoryGetController