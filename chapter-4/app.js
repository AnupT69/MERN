const http = require('http')
const userHandler = require('./ReadingChunks')
const server = http.createServer(userHandler);
//the userHandler we are importing is just like varibale name

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server is running on address http://localhost:${PORT}`);
})