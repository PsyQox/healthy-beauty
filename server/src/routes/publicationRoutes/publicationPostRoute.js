const { Router } = require('express')
const publicationPostHandler = require('../../handlers/publicationHandlers/publicationPostHandler')


const publicationPostRoute = Router()

publicationPostRoute.post('/addpublication', publicationPostHandler)

module.exports = publicationPostRoute