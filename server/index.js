require('dotenv').config()
const server = require('./src/server')
const PORT = process.env.PORT || 3001 
const { connection } = require('./src/db')


connection.sync({force: false, alter: false}).then(()=>{
    	//Server on
	server.listen(PORT, ()=>{
        console.log(`Server listen on port ${PORT}`);
    }) 
})
