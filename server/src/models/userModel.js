const { DataTypes } = require('sequelize')

module.exports = (sequelize)=>{
    sequelize.define('tbl_user',{
        id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        image: { 
            type: DataTypes.STRING,
            allowNull: true
        },
        name:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail:true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        privilege: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                isIn: [['Admin', 'Client']]
            },
            defaultValue: 'Client'
        }
    }, { timestamps: false })
}