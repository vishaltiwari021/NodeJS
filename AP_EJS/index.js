//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const express  = require("express");
const app = express();
const path  = require("path");
const port  = 3000;
//------------------------------------------------------------
//this use for static files like css and js.
app.use(express.static(path.join(__dirname,"public")));
//-----------------------------------------------------------
//this is how  we use ejs in our file:
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));//this is use when you run your file from outside of the folder
//----------------------------------------------
app.get('/',(req,res) =>{
    res.render("home.ejs");
})
//-------------------------------------------------------
app.get('/rolldice',(req,res) =>{
    let diceValue  = Math.floor(Math.random()*6) + 1;
    res.render("rolldice.ejs", {diceValue});
}) ; 
//-------------------------------------------------------------

app.get('/ig/:username' ,(req,res) =>{
    const instaData  = require("./data.json");  
    let {username} = req.params;
    res.render("instagram.ejs",{data:instaData[username]})
})
//----------------------------------------------------------------






//------------------------------------------------------------
app.listen(port, () =>{
    console.log(`Example server is working on port ${port}`); 
})
