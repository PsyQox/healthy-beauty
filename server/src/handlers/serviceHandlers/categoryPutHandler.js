const categoryUpdateController = require('../../controllers/categoryControllers/categoryUpdateController')


const categoryPutHandler = async (req, res) => {
    const { id } = req.params
    const { image, name, description } = req.body
    if (!id.trim()) res.status(401).json({error: "ID not provided"}) 
    try {
        const response = await categoryUpdateController({id, image, name, description})
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

module.exports = categoryPutHandler