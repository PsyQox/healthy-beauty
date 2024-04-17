
const { Router } = require('express')
const publicationImageGetHandler = require('../../handlers/publicationHandlers/publicationImageGetHandler')

const publicationImageGetRoute = Router()

publicationImageGetRoute.get('/publicationimage/:nameImage', publicationImageGetHandler)


module.exports = publicationImageGetRoute