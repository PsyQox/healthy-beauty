const {tbl_category} = require('../../db')

const categoryDeleteController = async (id) => {
    const result = await tbl_category.destroy({where: {id: id}})
    if (result === 1) {
        return { message: "Delete category successfully" }
    }else{
        return { message: "There is no category with that id" }
    }
}

module.exports = categoryDeleteController 