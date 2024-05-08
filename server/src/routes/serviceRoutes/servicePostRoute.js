const { Router } = require('express')
const servicePostHandler = require('../../handlers/serviceHandlers/servicePostHandler')
const uploadFile = require('../../middlewares/multerConfig')

const servicePostRoute = Router()

const upload = uploadFile({dest: 'serviceImg'})

servicePostRoute.post('/addservice', upload.single('image') ,servicePostHandler)

module.exports = servicePostRoute