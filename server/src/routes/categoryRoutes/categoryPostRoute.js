const { Router } = require('express')
const categoryPostHandler = require('../../handlers/categoryHandlers/categoryPostHandler')
const categoryPostRoute = Router()
const uploadFile = require('../../middlewares/multerConfig')

const upload = uploadFile({dest:'uploads/categoryImg/', module:'categoryPost'})

categoryPostRoute.post('/addcategory', upload.single('image'), categoryPostHandler)

module.exports = categoryPostRoute