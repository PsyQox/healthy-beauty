const serviceGetController = require("../../controllers/serviceControllers/serviceGetController");

const serviceGetHandler = async (req,res) => {
    try {
        const { serviceName } = req.query; 
        const result = await serviceGetController(serviceName)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = serviceGetHandler