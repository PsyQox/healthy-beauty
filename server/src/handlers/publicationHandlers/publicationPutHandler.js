const publicationUpdateController = require("../../controllers/publicationControllers/publicationUpdateController")


const publicationPutHandler = async (req, res) => {
    const { id } = req.params
    const files = req.files
    const {title, description, tblUserId } = req.body
    try {
    if (!id.trim() || !tblUserId.trim()) return res.status(401).json({error: "ID or user ID not provided"}) 
        
            const response = await publicationUpdateController({id, files, title, description, tblUserId})
            if (response[0] === 1) {
                res.status(200).json({message: "Successful update"})
            }else{
                res.status(500).json({message: "Nothing was updated"})
            }    
      
        
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = publicationPutHandler