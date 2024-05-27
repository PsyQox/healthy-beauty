const { Router } = require('express')
const servicePutHandler = require('../../handlers/serviceHandlers/servicePutHandler')
const uploadFile = require('../../middlewares/multerConfig')

const servicePutRoute = Router()

const upload = uploadFile({dest: 'uploads/serviceImg/'})

servicePutRoute.put("/updateservice/:id",upload.single('image'), servicePutHandler)

module.exports = servicePutRoute