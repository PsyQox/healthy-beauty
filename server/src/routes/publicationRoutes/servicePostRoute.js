const { Router } = require('express')
const servicePostHandler = require('../../handlers/serviceHandlers/servicePostHandler')

const servicePostRoute = Router()

servicePostRoute.post('/addservice', servicePostHandler)

module.exports = servicePostRoute