const { Router } = require('express')
const categoryPutHandler = require('../../handlers/categoryHandlers/categoryPutHandler')

const categoryPutRoute = Router()

categoryPutRoute.put("/updatecategory/:id", categoryPutHandler)

module.exports = categoryPutRoute