const http = require("http");

const server = http.createServer((req,res)=>{
    console.log(`URL:- ${req.url}`)
    console.log(`Method:- ${req.method}`)
    console.log(`Headers:- ${req.headers}`)

})

const port = 3000;
server.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`)});
    
    