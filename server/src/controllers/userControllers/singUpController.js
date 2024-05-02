require('dotenv').config()
const { tbl_user } = require('../../db')
const { URL_SERVER } = process.env
const bcrypt = require('bcrypt')
const fs = require('node:fs')

const singUpController = async ({ image, name, email, password, privilege }) => {
    const imageURL = `${URL_SERVER}/userimage/${image}`
    const hashedPassword = await bcrypt.hash(password, 10)
    const result = await tbl_user.findOrCreate({
        where:{
            email:email
        }, 
        defaults:{
            image: imageURL, 
            name,
            password: hashedPassword,
            privilege
        }})
    
    if (!result[1]) {
        fs.unlinkSync(`./uploads/userImg/${image}`)
        const error = new Error('Duplicate services are not allowed!');
        error.status = 409;
        throw error
    }

    return result[0]
}

module.exports = singUpController