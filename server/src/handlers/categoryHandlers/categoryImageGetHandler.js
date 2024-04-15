const path = require('node:path');
const imageExist = require('../../utils/imageExists');

const categoryImageGetHandler =  (req, res)=>{
    const { nameImage } = req.params;
    try {
        const urlImage = path.join(__dirname, '../../../uploads/categoryImg', nameImage)
        const isExist = imageExist(urlImage)
        
        if(isExist){
            res.status(200).sendFile(urlImage)
        }else{
            res.status(404).json({ error: "Not found!" })
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
    
}

module.exports = categoryImageGetHandler