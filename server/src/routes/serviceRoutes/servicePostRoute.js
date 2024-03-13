const { Router } = require('express')
const categoryPostHandler = require('../../handlers/categoryHandlers/categoryPostHandler')
const categoryPostRoute = Router()

categoryPostRoute.post('/addcategory', categoryPostHandler)

module.exports = categoryPostRoute