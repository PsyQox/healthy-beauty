const categoryAddController = require('../../controllers/categoryControllers/categoryAddController')


const categoryPostHandler = async (req, res) => {
    const file = req.file
    console.log(file);
    const { name, description } = req.body;
    console.log(name, description);
    // saveImage(file)
    if (!file || !name.trim() || !description.trim()) return res.status(401).json({ error:'Missing data' })  
    res.send('ruta cat')
    try {
        // const result = await categoryAddController({ image, name, description })
        // res.status(201).json(result)     
    } catch (error) {
        res.status(error.status || 500).json({ error:error.message }) 
    }
    
}

const saveImage = (file)=>{
    const arrayImg = file.originalname.split('.')
    const typeOfImg = arrayImg[arrayImg.length - 1]
    console.log(typeOfImg);
    //PNG, JPEG

    // const newPath = `./uploads/${file.originalname}`
    // const newPath2 = `./uploads/${file.filename}.jpg`
    // fs.renameSync(file.path, newPath2)
    // return newPath
}

module.exports = categoryPostHandler