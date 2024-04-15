const fs = require('node:fs');

const imageExist = (urlImage) => {
  
    return fs.existsSync(urlImage)

}

module.exports = imageExist