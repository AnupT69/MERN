//simple node js server 

const http = require('http');

//1.parameter:- request
//2.parameter:- response
// function requestListener(req,res){
//     console.log(req);
// }

// http.createServer(requestListener);

//By using anonymous function 
// http.createServer(function(req,res){
//     console.log(req);
// })

//by using arrow function 
const server = http.createServer((req,res)=>{
    console.log(req);
    console.log(res);
    process.exit();//stops event loop
});

// server.listen(3000);

const port = 3000;

server.listen(port , ()=>{
    console.log(`server is running on port http://localhost:${port}`);

})

