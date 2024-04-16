
const { Router } = require('express')

const publicationImageGetRoute = Router()

publicationImageGetRoute.get('publicationimage/:nameImage')


module.exports = publicationImageGetRoute