const fs = require("fs")
const userRequestHandler = (req,res)=>{
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
    else if(req.url.toLowerCase() === '/submit-details' && req.method === "POST"){

        const body = [];
        req.on("data",chunk=>{
            console.log(chunk);
            body.push(chunk);
        })
        req.on("end", ()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const params = new URLSearchParams(parsedBody);
            // const jsonObject = {};
            // for(const [key,val] of params.entries()){
            //     jsonObject[key] = val;
            // }

            //2.method 
            const jsonObject = Object.fromEntries(params);

            console.log(jsonObject);

            const jsonString = JSON.stringify(jsonObject);
            console.log(jsonString)
        fs.writeFileSync('user.txt',jsonString);

        })

        



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
}

module.exports = userRequestHandler;