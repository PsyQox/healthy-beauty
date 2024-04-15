const categoryUpdateController = require('../../controllers/categoryControllers/categoryUpdateController')


const categoryPutHandler = async (req, res) => {
    const file = req.file 
    const { id } = req.params
    const { name, description } = req.body
    if (!id.trim()) return res.status(401).json({error: "ID not provided"}) 
    try {
        if(file){
            const image = file.filename
            const response = await categoryUpdateController({id, image, name, description})
            if (response[0] === 1) {
                res.status(200).json({message: "Successful update"})
            }else{
                res.status(500).json({message: "Nothing was updated"})
            }
        }else{
            const response = await categoryUpdateController({id, name, description})
            if (response[0] === 1) {
                res.status(200).json({message: "Successful update"})
            }else{
                res.status(500).json({message: "Nothing was updated"})
            }
        }
        
    } catch (error) {
        res.status(500).json({ error: error.message }) 
    }  
}

module.exports = categoryPutHandler