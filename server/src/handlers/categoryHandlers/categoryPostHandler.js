const categoryAddController = require('../../controllers/categoryControllers/categoryAddController')
const fs = require('node:fs')

const categoryPostHandler = async (req, res) => {
    const file = req.file
    const { name, description } = req.body;
    if (!file || !name.trim() || !description.trim()) {
        if(file){
            fs.unlinkSync(`./uploads/categoryImg/${file.filename}`)
        }
        return res.status(401).json({ error:'Missing data' }) 
    } 
    try {
        const image = file.filename
        const result = await categoryAddController({ image, name, description })
        res.status(201).json(result)     
    } catch (error) {
        res.status(error.status || 500).json({ error:error.message }) 
    }
    
}

module.exports = categoryPostHandler