

const typeOfImg = (originalname) => { 
    const arrayOfImageName = originalname.split('.')
    const typeOfImage =  arrayOfImageName[arrayOfImageName.length - 1]

    return typeOfImage
}

module.exports = typeOfImg