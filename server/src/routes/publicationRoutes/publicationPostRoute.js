const { Router } = require('express')
const publicationPostHandler = require('../../handlers/publicationHandlers/publicationPostHandler')
const uploadFile = require('../../middlewares/multerConfig')

const publicationPostRoute = Router()

const upload = uploadFile({ dest: 'uploads/publicationImg/' })

publicationPostRoute.post('/addpublication', upload.array('images', 8), publicationPostHandler)

module.exports = publicationPostRoute