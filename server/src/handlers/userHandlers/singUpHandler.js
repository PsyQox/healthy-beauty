const singUpController = require("../../controllers/userControllers/singUpController")


const singUpHandler = async (req, res) => {
    const file = req.file
    const {name, email, password, privilege} = req.body
    if (!file || !name.trim() || !email.trim() || !password.trim()) return res.status(401).json({error: 'Missing data'})
    try {
            const image = file.filename
            const result = await singUpController({image, name, email, password, privilege})
            res.status(200).json(result)
    } catch (error) {
        res.status(error.status || 500).json({ error:error.message })
    }
}

module.exports = singUpHandler