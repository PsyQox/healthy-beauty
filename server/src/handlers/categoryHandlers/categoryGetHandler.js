const categoryGetController = require('../../controllers/categoryControllers/categoryGetController')

const categoryGetHandler = async (req,res) => {
    try {
        // const {message} = req.params;
        // console.log(message);
        const result = await categoryGetController() 
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = categoryGetHandler