const { Router } = require('express')
const publicationGetHandler = require('../../handlers/publicationHandlers/publicationGetHandler')
const publicationGetRoute  = Router()

publicationGetRoute.get('/getpublication', publicationGetHandler)

module.exports = publicationGetRoute