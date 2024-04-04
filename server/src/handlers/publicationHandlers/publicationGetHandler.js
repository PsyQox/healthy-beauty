const publicationGetController = require("../../controllers/publicationControllers/publicationGetController");


const publicationGetHandler = async (req,res) => {
    try {
        const { publicationTitle } = req.query; 
        const result = await publicationGetController(publicationTitle)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = publicationGetHandler