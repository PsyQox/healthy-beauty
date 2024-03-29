const serviceUpdateController = require("../../controllers/serviceControllers/serviceUpdateController")


const servicePutHandler = async (req, res) => {
    const { id } = req.params
    const { image, name, description, price, tblCategoryId } = req.body
    if (!id.trim() || !tblCategoryId.trim()) return res.status(401).json({error: "ID or Category ID not provided"}) 
    try {
        
        const response = await serviceUpdateController({id, image, name, description, price, tblCategoryId})
        if (response[0] === 1) {
            res.status(200).json({message: "Successful update"})
        }else{
            res.status(500).json({message: "Nothing was updated"})
        }
        console.log(response);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = servicePutHandler