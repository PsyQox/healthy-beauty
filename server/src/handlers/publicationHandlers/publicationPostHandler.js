const publicationAddController = require("../../controllers/publicationControllers/publicationAddController");
const fs = require('node:fs')


const publicationPostHandler = async (req, res) => {
    const files = req.files
    const { title, description, tblUserId } = req.body;
    
    try { 
    if (!title.trim()  || !description.trim() || !tblUserId.trim()) {
        if (files.length > 0) {
            files.forEach(file => {
                fs.unlinkSync(`./uploads/publicationImg/${file.filename}`)
            });
        }


        return res.status(401).json({ error:'Missing data' })  
    }
       
        const result = await publicationAddController({ title, files, description, tblUserId })
        res.status(201).json(result)
     
    } catch (error) {
        if (files.length > 0) {
            files.forEach(file => {
                fs.unlinkSync(`./uploads/publicationImg/${file.filename}`)
            });
        }
        res.status(error.status || 500).json({ error:error.message })
        
    }
    
}

module.exports = publicationPostHandler