const { Router } = require('express')
const servicePutHandler = require('../../handlers/serviceHandlers/servicePutHandler')


const servicePutRoute = Router()

servicePutRoute.put("/updateservice/:id", servicePutHandler)

module.exports = servicePutRoute