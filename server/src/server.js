const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./routes')

const server = express()

server.use(morgan('dev'));
server.use(express.json());
server.use(cors({
    origin: '*',
    credentials: true,
    methods: 'GET, POST, OPTIONS, PUT, DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
}));

server.use('/', routes)

server.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ error: "Something is wrong!"});
  });
 


module.exports = server