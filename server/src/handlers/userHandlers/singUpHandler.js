const singUpController = require("../../controllers/userControllers/singUpController")
const fs = require('node:fs')

const singUpHandler = async (req, res) => {
    const file = req.file
    const {name, email, password, privilege} = req.body
    try {
    if (!file || !name.trim() || !email.trim() || !password.trim()) {
        if(file){
            fs.unlinkSync(`./uploads/userImg/${file.filename}`)
        }
        return res.status(401).json({ error:'Missing data' }) 
    } 


            const image = file.filename
        
            const result = await singUpController({image, name, email, password, privilege})
            res.status(200).json(result)
    } catch (error) {
        res.status(error.status || 500).json({ error:error.message })
    }
}

module.exports = singUpHandler