const { Router } = require('express')
// const categoryPutHandler = require('../../handlers/categoryHandlers/categoryPutHandler')

const servicePutRoute = Router()

servicePutRoute.put("/updateservice/:id", categoryPutHandler)

module.exports = servicePutRoute