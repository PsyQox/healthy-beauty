const { Router } = require('express')
const publicationPutHandler = require('../../handlers/publicationHandlers/publicationPutHandler')
const uploadFile = require('../../middlewares/multerConfig')

const publicationPutRoute = Router()

const upload = uploadFile({ dest: 'uploads/publicationImg/' })

publicationPutRoute.put("/updatepublication/:id", upload.array('images', 8), publicationPutHandler)

module.exports = publicationPutRoute