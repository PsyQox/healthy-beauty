const { Router } = require('express')
const categoryImageGetHandler = require('../../handlers/categoryHandlers/categoryImageGetHandler')

const categoryImageGetRoute = Router()

categoryImageGetRoute.get('/categoryimage/:nameImage', categoryImageGetHandler)

module.exports = categoryImageGetRoute