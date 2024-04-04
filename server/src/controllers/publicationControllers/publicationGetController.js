const { tbl_publication, tbl_user } = require('../../db')
const { Op } = require('sequelize')

const publicationGetController = (publicationTitle) => {
    if (publicationTitle) {
        const publications = tbl_publication.findAll({where:{
            title:{
                [Op.iLike]: `%${publicationTitle}%`
            }
        }, include:{ model: tbl_user }})
        return publications
    }else{
        const publications = tbl_publication.findAll({include: { model: tbl_user }})
        return publications
    }
}

module.exports = publicationGetController