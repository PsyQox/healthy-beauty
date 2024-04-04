require('dotenv').config()
const Sequelize = require('sequelize')
const {DB_HOST, DB_NAME, DB_PASSWORD, DB_USER} = process.env
const userModel = require('./models/userModel')
const categoryModel = require('./models/categoryModel')
const serviceModel = require('./models/serviceModel')
const publicationModel = require('./models/publicationModel')

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
{
    logging:false,
    native: false
});

userModel(sequelize)
categoryModel(sequelize)
serviceModel(sequelize)
publicationModel(sequelize)

const {tbl_user, tbl_category, tbl_service, tbl_publication} = sequelize.models

//Associations

tbl_service.belongsTo(tbl_category)
tbl_category.hasMany(tbl_service)

tbl_publication.belongsTo(tbl_user)
tbl_user.hasMany(tbl_publication)

module.exports = {
    connection: sequelize,
    tbl_user,
    tbl_category,
    tbl_service
}