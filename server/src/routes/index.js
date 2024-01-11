const { Router } = require('express')
const categoryPostRoute = require('./categoryRoutes/categoryPostRoute')
const categoryGetRoute = require('./categoryRoutes/categoryGetRoute');
const categoryDeleteRoute = require('./categoryRoutes/categoryDeleteRoute')

const routes = Router()



routes.use('/', categoryPostRoute)
routes.use('/', categoryGetRoute)
routes.use('/', categoryDeleteRoute) 


module.exports = routes