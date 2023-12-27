const {Router} = require('express')
const categoryGetHandler = require('../../handlers/categoryHandlers/categoryGetHandler')
const categoryGetRoute  = Router()

categoryGetRoute.get('/getcategory', categoryGetHandler)

module.exports = categoryGetRoute