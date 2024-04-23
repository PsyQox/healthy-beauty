const { tbl_user } = require('../../db')
const bcrypt = require('bcrypt')

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
        return user
    }
}

module.exports = singInController