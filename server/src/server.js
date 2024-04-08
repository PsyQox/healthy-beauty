const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./routes')
const multer = require('multer')
const fs = require('node:fs')

const upload = multer({ dest: 'uploads/' })

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

server.post('/image', upload.single('img'), (req, res)=>{
  console.log(req.file);
  saveImage(req.file)
  res.send("hola");
});

const saveImage = (file)=>{
    const newPath = `./uploads/${file.originalname}`
    const newPath2 = `./uploads/${file.filename}.jpg`
    fs.renameSync(file.path, newPath2)
    return newPath
}

server.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ error: "Something is wrong!"});
  });
 


module.exports = server