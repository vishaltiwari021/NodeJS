const express  = require("express");
const app = express();
const path = require("path");
const port  = 3000;
const {v4:uuidv4} = require('uuid');//this npm package for unique id
const mathodoverride = require("method-override");
//middleware:
app.use(express.urlencoded({extended:true}));
//static files:Public
app.use(express.static(path.join(__dirname,"public")));
//EJS File: Views
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
//here we use the metho-override:
app.use(mathodoverride("_method"));

//-------------------------------------------------------------
//Routes:
let users  =  [{
    username :"vishal Tiwari",
    id: uuidv4(),
    comments: "hello vishal"
},
{
    username :"Aditya Yadav",
    id: uuidv4(),
    comments: "hello aditya"
},{
    username :"Shailendra Singh Kunwar",
    id: uuidv4(),
    comments: "hello shailu"
}
];

//-------------------------------------------------------

app.get('/posts',(req,res)=>{
    res.render("index.ejs",{posts:users})
})

//---------------------------------------------------------
//new user:
app.get('/posts/new',(req,res) =>{
    res.render("new.ejs");
})
//---------------------------------------------------------
//form data add at here:
app.post('/posts',(req,res) =>{
    let{username,comments} = req.body;
    let id  = uuidv4();
    users.push({id,username,comments}); 
   res.redirect('/posts');
})
//--------------------------------------------------------------
//see the individual user post:
app.get('/posts/:id',(req,res) =>{
    let {id} = req.params;  
    let post  = users.find((p) => id  === p.id);
    res.render("show.ejs",{post});
})
//--------------------------------------------------
//update the individual post of user:
app.patch('/posts/:id',(req,res) =>{
  let{id} = req.params;
  let newcomments = req.body.comments;
  let post  = users.find((p) => id  === p.id);
  post.comments  = newcomments;
  console.log(post);
 res.redirect('/posts');
})
//-----------------------------------------------
//edit route:
app.get('/posts/:id/edit',(req,res) =>{
     let {id} = req.params;  
    let post  = users.find((p) => id  === p.id);
    res.render('update.ejs',{post})
})
//-----------------------------------------------
//delete route:
app.delete('/posts/:id',(req,res) =>{
    let {id} = req.params;  
    users = users.filter((p) => id  !== p.id);
    res.redirect('/posts');
    
})




//------------------------------------------------------------
app.listen(port,()=>{
    console.log(`Example app is running on port ${port}`);
})