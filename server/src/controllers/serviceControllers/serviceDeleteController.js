const { tbl_service } = require('../../db')

const serviceDeleteController = async (id) => {
    
    const result = await tbl_service.destroy({where: { id: id }});

    if (result === 1) {
        return { message: "Delete service successfully" };
    }else{
        return { message: "There is no service with that id" };
    }
} 

module.exports = serviceDeleteController 