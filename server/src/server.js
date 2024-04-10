const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./routes')
// const multer = require('multer')
const path = require('path')
const fs = require('node:fs')

// const upload = multer({ dest: 'uploads/' })

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

server.get('/image/:nameImage', (req, res) => {
  const { nameImage } = req.params

  const urlImage = path.join(__dirname, '../uploads/' + nameImage)

  fs.access(urlImage, (err) => {
    if (err) {
        console.log("no existe");
        res.status()
    }else{
      console.log("si existe");
      res.status(200).send("hola")
    }
  })

  console.log(urlImage);
  // res.status(200).sendFile(urlImage)
})



server.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ error: "Something is wrong!"});
  });



module.exports = server