const multer = require('multer')
const fs = require('node:fs')
const typeOfImg = require('../utils/typeOfImg')

const uploadFile = (props) => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            const destination = props?.dest || 'uploads/'
            //intenta acceder a la carpeta para verificar si existe
            fs.access(destination, (err) => {
                if (err) {
                    //si la carpeta no existe intentar crearla
                    fs.mkdir(destination, {recursive: true}, (err)=>{
                        if(err){
                            throw new Error('Something is wrong!')
                        }else{
                            cb(null, destination)
                        }
                    })
                }else{
                    cb(null, destination)
                }
            })
        },
        filename: function (req, file, cb) {
          cb(null, `${Date.now()}-${file.originalname}`)
        }
      })
      // Esta funcion determina el filtro de que tipo de imagenes acepta y que tipo no
    const fileFilter = (req, file, cb) => {
            //Se responde con un callback con primer parametro nulo y el segundo boolean
            const typeOfImage = typeOfImg(file.originalname)

            if (typeOfImage === 'jpg' || typeOfImage === 'jpeg' || typeOfImage === 'png') {
                cb(null, true)
            }else{
                cb(null, false)
            }
        
        
    }
      
      const upload = multer({storage: storage, fileFilter: fileFilter})

      return upload
}

module.exports = uploadFile