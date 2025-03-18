const userRequestHandler = (req,res)=>{
    if(req.url === '/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title>Calculator</title></head>')
    res.write('<body><h1>Welcome<h1>')
    res.write('<a href="/calculator">Calculator Page</a>')
    res.write('</body>')
    res.write('</html>')
    return res.end();
    }
    else if(req.url === '/calculator'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>Calculator</title></head>')
        res.write('<body><h1>Calculator Page<h1>')
        res.write('<a href="/sum">Sum</a>')
        res.write('</body>')
        res.write('</html>')

    }
    else if(req.url === '/sum'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>Calculate Sum</title></head>');
        res.write('<body><h1>Enter Number</h1>');
        res.write('<form action="/submit" method="POST">');
        res.write('<input type="number" name="valueOne" placeholder="Enter value" required><br>');
        res.write('<input type="number" name="valueTwo" placeholder="Enter value" required><br>');
        res.write('<input type="submit" value="submit">');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>')
    }
    else if(req.url === '/submit' && req.method === "POST"){
        let valueOne ;
        let valueTwo ;
        let sum;
        const body = [];
        req.on("data",chunk=>{
            console.log(chunk);
            body.push(chunk)
        })
        req.on("end",()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const params = new URLSearchParams(parsedBody);

            const jsonObject = Object.fromEntries(params);
            console.log(jsonObject);
            const jsonString = JSON.stringify(jsonObject);
            console.log(jsonString);

             valueOne = parseInt(params.get("valueOne"),10);
             valueTwo = parseInt(params.get("valueTwo"),10);
             sum = valueOne + valueTwo;

             console.log(valueOne);
             console.log(valueTwo);
             console.log(sum);
             res.statusCode = 302;
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>Sum results</title></head>');
        res.write(`<body><h1>Sum Result:-</h1>
            <h2>Sum of ${valueOne} and ${valueTwo} is ${sum}</h2>
            </body>`);
        res.write('</html>');
        return res.end();
            


        })
        


        

    }
}

module.exports = userRequestHandler;