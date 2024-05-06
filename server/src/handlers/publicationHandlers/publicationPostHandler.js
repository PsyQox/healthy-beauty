const publicationAddController = require("../../controllers/publicationControllers/publicationAddController");


const publicationPostHandler = async (req, res) => {
    const files = req.files
    const { title, description, tblUserId } = req.body;
    
    try { 
if (!title.trim()  || !description.trim() || !tblUserId.trim()) return res.status(401).json({ error:'Missing data' })  
       if (files.length !== 0) {
           const result = await publicationAddController({ title, files, description, tblUserId })
           res.status(201).json(result)
        }else{
            const result = await publicationAddController({ title, description, tblUserId })
           res.status(201).json(result)
       }

    } catch (error) {

        res.status(error.status || 500).json({ error:error.message })
        
    }
    
}

module.exports = publicationPostHandler