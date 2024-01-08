const { Router } = require('express')
const categoryDeleteHandler = require('../../handlers/categoryHandlers/catergoryDeleteHandler')

const categoryDeleteRoute = Router()

categoryDeleteRoute.delete('/deletecategory/:id', categoryDeleteHandler)


module.exports = categoryDeleteRoute