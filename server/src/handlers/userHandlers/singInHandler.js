const singInController = require("../../controllers/userControllers/singInController");


const singInHandler = async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await singInController({email, password})
        res.status(200).json(result)
    } catch (error) {
        res.status(error.status || 500).json({error: error.message})
    }
}


module.exports = singInHandler