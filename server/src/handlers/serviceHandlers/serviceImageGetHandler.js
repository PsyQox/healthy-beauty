const path = require('node:path')
const imageExist = require('../../utils/imageExists')

const serviceImageGetHandler = (req, res) => {
    try {
        const { nameImage } = req.params;
        const urlImage = path.join(__dirname, '../../../uploads/serviceImg',nameImage)
        const isExist = imageExist(urlImage) 

        if (isExist) {
            res.status(200).sendFile(urlImage)
        }else{
            res.status(400).json({error: 'Not found!'})
        }
        
    } catch (error) {
        res.status(500).json({error: error.message})        
    }

}


module.exports = serviceImageGetHandler