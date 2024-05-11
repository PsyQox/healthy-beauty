const fs = require('node:fs')
const serviceAddController = require("../../controllers/serviceControllers/serviceAddController");



const servicePostHandler = async (req, res) => {
    const file = req.file
    const { name, description, price, tblCategoryId } = req.body;
    try { 
        if (!file || !name.trim() || !description.trim() || !price || !tblCategoryId.trim()){
            if (file) {
                fs.unlinkSync(`./uploads/serviceImg/${file.filename}`)
            }
            return res.status(401).json({ error:'Missing data' })
        }
        const image = file.filename        
        const result = await serviceAddController({ image, name, description, price, tblCategoryId })
        res.status(201).json(result)    
    } catch (error) {
        res.status(error.status || 500).json({ error:error.message })
    }
    
}

module.exports = servicePostHandler