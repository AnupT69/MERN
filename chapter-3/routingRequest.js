const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Like/share</h1></body>');
    res.write('</html>')
    return res.end();
    }
    else if(req.url === '/learning'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Learning</title></head>');
    res.write('<body><h1>Learning MERN</h1></body>');
    res.write('</html>')
    return res.end();
    }
 
        res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Welcome from anup</h1></body>');
    res.write('</html>')
    return res.end();
    
})

const port = 3000;

server.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);

})