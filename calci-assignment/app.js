const http = require('http')
const userHandler = require('./WelcomePage')
const server = http.createServer(userHandler);

const port = 3000;
server.listen(port , ()=>{
    console.log(`Server is running on address http://localhost:${port}`);
})

