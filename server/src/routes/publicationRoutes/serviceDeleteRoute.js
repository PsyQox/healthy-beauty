const { Router } = require('express')
const serviceDeleteHandler = require('../../handlers/serviceHandlers/serviceDeleteHandler')

const serviceDeleteRoute = Router()

serviceDeleteRoute.delete('/deleteservice/:id', serviceDeleteHandler)


module.exports = serviceDeleteRoute