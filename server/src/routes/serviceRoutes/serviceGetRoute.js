const {Router} = require('express')
const serviceGetHandler = require('../../handlers/serviceHandlers/serviceGetHandler')
const serviceGetRoute  = Router()

serviceGetRoute.get('/getservice', serviceGetHandler)

module.exports = serviceGetRoute