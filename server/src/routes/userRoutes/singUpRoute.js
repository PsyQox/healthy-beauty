const { Router } = require('express')
const uploadFile = require('../../middlewares/multerConfig')
const singUpHandler = require('../../handlers/userHandlers/singUpHandler')

const singUpRoute = Router()

const upload = uploadFile({dest: 'uploads/userImg'})

singUpRoute.post('/singup', upload.single('image') , singUpHandler)

module.exports = singUpRoute