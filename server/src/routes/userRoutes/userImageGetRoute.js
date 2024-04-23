const { Router } = require('express')
const userImageGetHandler = require('../../handlers/userHandlers/userImageGetHandler')


const userImageGetRoute = Router()

userImageGetRoute.get('/userimage/:nameImage', userImageGetHandler)

module.exports =  userImageGetRoute