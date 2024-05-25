const { Router } = require('express')
const serviceImageGetHandler = require('../../handlers/serviceHandlers/serviceImageGetHandler')

const serviceImageGetRoute = Router()

serviceImageGetRoute.get('/serviceimage/:nameImage', serviceImageGetHandler)


module.exports = serviceImageGetRoute