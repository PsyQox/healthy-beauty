require('dotenv').config()
const { tbl_user } = require('../../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { SECRET } = process.env

const singInController = async ({ email, password }) => {
    const user = await tbl_user.findOne({where: {
        email
    }}) 
    if (!user) { 
        const error = new Error('Not found!')
        error.status= 404
        throw error
     }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
        const error = new Error('Not found!')
        error.status= 404
        throw error
    }else{
        const userData = { name:user.name, email: user.email, privilege: user.privilege }
        const token = jwt.sign(userData, SECRET,{
            expiresIn: '5m'
        })
        userData.accessToken = token
        return userData
    }
}

module.exports = singInController