console.log("Anup is best developer");
const fs = require('fs')

fs.writeFile("output.txt","demonstarting file manipulation with node js" , (err)=>{
    if(err) throw err;
    else
    console.log("File manipulated successfully");
})