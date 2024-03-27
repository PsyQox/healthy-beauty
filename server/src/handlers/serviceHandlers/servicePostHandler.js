const serviceAddController = require("../../controllers/serviceControllers/serviceAddController");



const servicePostHandler = async (req, res) => {
    const { image, name, description, price, tblCategoryId } = req.body;
    if (!image.trim() || !name.trim() || !description.trim() || !price || !tblCategoryId.trim()) return res.status(401).json({ error:'Missing data' })  
    try { 
        const result = await serviceAddController({ image, name, description, price, tblCategoryId })
        res.status(201).json(result)    
    } catch (error) {
        res.status(error.status || 500).json({ error:error.message })
    }
    
}

module.exports = servicePostHandler