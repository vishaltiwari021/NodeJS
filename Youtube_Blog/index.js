const express  = require("express");
const path  = require("path");
const userRoute  = require('./routes/user');
const app =express();

const PORT  = 3000;
//middlewares:
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

//routes:
app.get("/",(req,res)=>{
    res.render("homepage");
});

app.use('/',userRoute);
