const http = require('http');
const fs = require("fs");
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>Namaste MERN</title></head>');
        res.write('<body><h1>Enter your details</h1>');
        res.write('<form action="/submit-details" method="POST">');
        res.write('<input type="text" name="username" placeholder="Username"><br>');
        res.write('<label for="gender">Gender:</label>');
        res.write('<input type="radio" id="male" name="gender" value="male"');
        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" id="female" name="gender" value="female"');
        res.write('<label for="female">Female</label><br>');
        res.write('<input type="submit" value="submit">');


        
        res.write('</form>');
        res.write('</body>');
        res.write('</html>')
        return res.end();
    }
    else if(req.url.toLowerCase() === "/submit-details" && req.method === "POST"){
        fs.writeFileSync('user.txt',"Anup Tiwari");
        res.statusCode= 302;
        res.setHeader('Location','/');
        return res.end();


    }
    

        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>Namaste MERN</title></head>');
        res.write('<body><h1>Welcome</h1></body>');
        res.write('</html>');
        return res.end();


    
})
const port = 3000;

server.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})