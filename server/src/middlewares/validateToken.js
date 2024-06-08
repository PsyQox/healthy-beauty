require('dotenv').config()
const jwt = require('jsonwebtoken')
const { SECRET } = process.env

const validateToken = (req, res, next)=>{
    const accessToken = req.headers['authorization']
    console.log(accessToken);
    if(!accessToken) return res.status(401).json({error: 'Access denied'})
    
    jwt.verify(accessToken, SECRET, (err, user) =>{
        if (err) {
            return res.status(401).json({error: 'Access denied, token expired or incorrect'})
        }else{
            next()
        }
    })
    
}

module.exports = validateToken