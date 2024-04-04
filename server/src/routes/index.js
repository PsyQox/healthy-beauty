const { Router } = require('express')
const categoryPostRoute = require('./categoryRoutes/categoryPostRoute')
const categoryGetRoute = require('./categoryRoutes/categoryGetRoute');
const categoryDeleteRoute = require('./categoryRoutes/categoryDeleteRoute')
const categoryPutRoute = require('./categoryRoutes/categoryPutRoute');
const serviceGetRoute = require('./serviceRoutes/serviceGetRoute');
const servicePostRoute = require('./serviceRoutes/servicePostRoute');
const serviceDeleteRoute = require('./serviceRoutes/serviceDeleteRoute');
const servicePutRoute = require('./serviceRoutes/servicePutRoute');
const publicationGetRoute = require('./publicationRoutes/publicationGetRoute')

const routes = Router()

 
routes.use('/', categoryPostRoute)
routes.use('/', categoryGetRoute)
routes.use('/', categoryDeleteRoute) 
routes.use('/', categoryPutRoute)
routes.use('/', serviceGetRoute)
routes.use('/', servicePostRoute)
routes.use('/', serviceDeleteRoute)
routes.use('/', servicePutRoute)
routes.use('/', publicationGetRoute)

module.exports = routes