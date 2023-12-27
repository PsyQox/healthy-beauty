const { Router } = require('express')
const categoryPostRoute = require('./categoryRoutes/categoryPostRoute')
const categoryGetRoute = require('./categoryRoutes/categoryGetRoute');

const routes = Router()



routes.use('/', categoryPostRoute)
routes.use('/', categoryGetRoute)


module.exports = routes