const express  = require("express");
const path  = require("path");
const userRoute  = require('./routes/user');
const mongoose  = require("mongoose");

const app =express();


mongoose.connect('mongodb://localhost:27017/blogify')
.then((e)=>{console.log("mongodb is connected");
});

const PORT  = 3000;
//middlewares:
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.use(express.urlencoded({extended:false}));

//routes:
app.get("/",(req,res)=>{
    res.render("homepage");
});

app.use('/user',userRoute);

app.listen(PORT,()=>{
    console.log(`app lististing on post no:${PORT}`);
    
})
