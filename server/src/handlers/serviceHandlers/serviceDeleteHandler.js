const serviceDeleteController = require("../../controllers/serviceControllers/serviceDeleteController")


const serviceDeleteHandler = async (req, res)=>{
    const { id } = req.params
    try {
        if (!id.trim()) return res.status(401).json({ error: "No ID provided" })
        const result = await serviceDeleteController(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = serviceDeleteHandler