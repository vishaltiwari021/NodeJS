const express  =require("express");
const path = require("path");
const multer = require("multer");


const app  = express();
const PORT  = 8000;

//const upload = multer({dest:"uploads/"});// ourfile is coruptformate we can;t read it, so we use this=
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads")
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`)
  }
})
const upload = multer({ storage: storage })

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
//middleware:
app.use(express.json());
app.use(express.urlencoded({extended:false}));// this helps to paarse the form data from frountend.

app.get("/",(req,res)=>{
    return res.render("homepage");
});
app.post("/upload",upload.single("profileImage"),(req,res)=>{
    console.log(req.body);
    console.log(req.file);

    return res.redirect("/");
    
});














app.listen(PORT,()=>{
    console.log(`app is listing on port:${PORT}`);
    
});