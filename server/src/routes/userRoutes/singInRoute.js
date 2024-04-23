const { Router } = require('express')
const singInHandler = require('../../handlers/userHandlers/singInHandler')


const singInRoute = Router()

singInRoute.post('/singin', singInHandler)

module.exports = singInRoute