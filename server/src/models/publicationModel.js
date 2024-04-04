const { DataTypes }  = require('sequelize')

module.exports = (sequelize) => { 
    sequelize.define('tbl_publication', {
        id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        title:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}
   