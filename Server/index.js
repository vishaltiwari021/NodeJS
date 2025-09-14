//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const http = require("http");
const fs  = require("fs");
const url = require("url");

const myServer  = http.createServer((req,res) =>{
    const log = `${Date.now()} : ${req.url}  NEW Request recevide\n`;
    const myUrl = url.parse(req.url,true);
    console.log(myUrl);
    
   fs.appendFile("./data.txt",log,(err,data) =>{
    switch(myUrl.pathname){
        case "/" :
             res.end("Hello from Server");
             break;
        case "/about":
             res.end("I am vishal");
             break;
        default:
             res.end("404 Error");     
    }
    
   })
   
    
})

myServer.listen(8000,() => console.log("server start"));