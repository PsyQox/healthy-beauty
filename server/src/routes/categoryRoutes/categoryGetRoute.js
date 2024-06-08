const {Router} = require('express')
const categoryGetHandler = require('../../handlers/categoryHandlers/categoryGetHandler')
const categoryGetRoute  = Router()
const validateToken = require('../../middlewares/validateToken')

categoryGetRoute.get('/getcategory', validateToken,categoryGetHandler)

module.exports = categoryGetRoute