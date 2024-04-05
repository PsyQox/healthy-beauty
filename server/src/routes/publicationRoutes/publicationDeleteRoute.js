const { Router } = require('express')
const publicationDeleteHandler = require('../../handlers/publicationHandlers/publicationDeleteHandler')


const publicationDeleteRoute = Router()

publicationDeleteRoute.delete('/deletepublication/:id', publicationDeleteHandler)


module.exports = publicationDeleteRoute