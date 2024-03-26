const { tbl_service } = require('../../db')
const {Op} = require('sequelize')

const serviceGetController = (serviceName) => {
    if (serviceName) {
        const services = tbl_service.findAll({where:{
            name:{
                [Op.iLike]: `%${serviceName}%`
            }
        }})
        return services
    }else{
        const services = tbl_service.findAll()
        return services
    }
}

module.exports = serviceGetController