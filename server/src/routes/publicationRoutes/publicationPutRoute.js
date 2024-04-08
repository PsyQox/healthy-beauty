const { Router } = require('express')
const publicationPutHandler = require('../../handlers/publicationHandlers/publicationPutHandler')


const publicationPutRoute = Router()

publicationPutRoute.put("/updatepublication/:id",publicationPutHandler)

module.exports = publicationPutRoute