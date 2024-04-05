const publicationAddController = require("../../controllers/publicationControllers/publicationAddController");


const publicationPostHandler = async (req, res) => {

    const { title, image, description, tblUserId } = req.body;

    if (!title.trim() || !image.trim() || !description.trim() || !tblUserId.trim()) return res.status(401).json({ error:'Missing data' })  

    try { 

        const result = await publicationAddController({ title, image, description, tblUserId })
        res.status(201).json(result)    

    } catch (error) {

        res.status(error.status || 500).json({ error:error.message })
        
    }
    
}

module.exports = publicationPostHandler