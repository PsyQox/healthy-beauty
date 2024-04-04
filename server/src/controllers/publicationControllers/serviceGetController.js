const { tbl_service, tbl_category } = require('../../db')
const {Op} = require('sequelize')

const serviceGetController = (serviceName) => {
    if (serviceName) {
        const services = tbl_service.findAll({where:{
            name:{
                [Op.iLike]: `%${serviceName}%`
            }
        }, include:{ model: tbl_category }})
        return services
    }else{
        const services = tbl_service.findAll({include: { model: tbl_category }})
        return services
    }
}

module.exports = serviceGetController