const { Router } = require('express')
const categoryPutHandler = require('../../handlers/categoryHandlers/categoryPutHandler')

const categoryPutRoute = Router()

categoryPutRoute.put("/updatecategory", categoryPutHandler)

module.exports = categoryPutRoute