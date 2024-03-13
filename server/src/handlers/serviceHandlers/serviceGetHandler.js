// const categoryGetController = require('../../controllers/categoryControllers/categoryGetController')

const serviceGetHandler = async (req,res) => {
    try {
        const { serviceName } = req.query; 
        // const result = await categoryGetController(serviceName) 
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = serviceGetHandler