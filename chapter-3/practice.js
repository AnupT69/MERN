const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/home'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>Myntra Home Page</title></head>')
        res.write('<body><header>')
        res.write('<nav><ul><li><a href="http://localhost:3000/men">Men</a></li><li><a href="http://localhost:3000/women">Women</a></li><li><a href="http://localhost:3000/kids">Kids</a></li> <li><a href="http://localhost:3000/cart">Cart</a></li></ul></nav></header>');
        res.write('<main><h1>Home Section</h1></main><footer>w&copy; Authorized Users</footer>'
        )
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }
    else if(req.url === '/men'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>Myntra Men Section</title></head>')
        res.write('<body><header>')
        res.write('<nav><ul><li><a href="http://localhost:3000/home">Home</a></li><li><a href="http://localhost:3000/women">Women</a></li><li><a href="http://localhost:3000/kids">Kids</a></li> <li><a href="http://localhost:3000/cart">Cart</a></li></ul></nav></header>');
        res.write('<main><h1>Men Section</h1></main><footer>w&copy; Authorized Users</footer>'
        )
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }
    else if(req.url === '/women'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>Myntra WoMen Section</title></head>')
        res.write('<body><header>')
        res.write('<nav><ul><li><a href="http://localhost:3000/home">Home</a></li><li><a href="http://localhost:3000/men">men</a></li><li><a href="http://localhost:3000/kids">Kids</a></li> <li><a href="http://localhost:3000/cart">Cart</a></li></ul></nav></header>');
        res.write('<main><h1>Women Section</h1></main><footer>w&copy; Authorized Users</footer>'
        )
        res.write('</body>')
        res.write('</html>')
        return res.end();

    }
    else if(req.url === '/kids'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>Myntra Kids Section</title></head>')
        res.write('<body><header>')
        res.write('<nav><ul><li><a href="http://localhost:3000/home">Home</a></li><li><a href="http://localhost:3000/men">men</a></li><li><a href="http://localhost:3000/women">Women</a></li> <li><a href="http://localhost:3000/cart">Cart</a></li></ul></nav></header>');
        res.write('<main><h1>Kids Section</h1></main><footer>w&copy; Authorized Users</footer>'
        )
        res.write('</body>')
        res.write('</html>')
        return res.end();

    }
    else if(req.url === '/cart'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>Myntra Cart Section</title></head>')
        res.write('<body><header>')
        res.write('<nav><ul><li><a href="http://localhost:3000/home">Home</a></li><li><a href="http://localhost:3000/men">men</a></li><li><a href="http://localhost:3000/women">Women</a></li> <li><a href="http://localhost:3000/kids">kids</a></li></ul></nav></header>');
        res.write('<main><h1>Cart Section</h1></main><footer>w&copy; Authorized Users</footer>'
        )
        res.write('</body>')
        res.write('</html>')
        return res.end();

    }




    res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>Myntra</title></head>')
        res.write('<body><header>')
        res.write('<nav><ul><li><a href="http://localhost:3000/home">Home</a></li><li><a href="">Men</a></li><li><a href="">Women</a></li><li><a href="">Kids</a></li> <li><a href="">Cart</a></li></ul></nav></header>');
        res.write('<main><h1>Myntra Section</h1></main><footer>w&copy; Authorized Users</footer>'
        )
        res.write('</body>')
        res.write('</html>')
        return res.end();



})

const port = 3000;
server.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`)
})

