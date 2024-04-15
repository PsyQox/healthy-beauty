const { Router } = require('express')
const categoryPutHandler = require('../../handlers/categoryHandlers/categoryPutHandler')
const uploadFile = require('../../middlewares/multerConfig')

const categoryPutRoute = Router()

const upload = uploadFile({dest: 'uploads/categoryImg/'})

categoryPutRoute.put("/updatecategory/:id", upload.single('image'), categoryPutHandler)

module.exports = categoryPutRoute