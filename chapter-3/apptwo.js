const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Like/share</h1></body>');
    res.write('</html>')
    res.end();

});

const port = 3000;
server.listen(port,()=>{
    console.log(`Server is running on address: http://localhost:${port}`)
})