const categoryGetController = require('../../controllers/categoryControllers/categoryGetController')

const categoryGetHandler = async (req,res) => {
    try {
        const { categoryName } = req.query; 
        const result = await categoryGetController(categoryName) 
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = categoryGetHandler