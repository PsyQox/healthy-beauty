const categoryDeleteController = require('../../controllers/categoryControllers/categoryDeleteController')


const categoryDeleteHandler = async (req, res)=>{
    try {
        const { id } = req.params
        const result = await categoryDeleteController(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = categoryDeleteHandler