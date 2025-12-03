//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const express  = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const chat = require("./models/chat.js");
const methodOverride  = require("method-override");
app.use(methodOverride('_method'));
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));//middleware
//-----------------------------------------------------------------
//Mongoose Setup:
const mongoose  = require("mongoose");
main().then((res) =>{
    console.log("Connect successfully");
}).catch((err) =>{console.log(err);
})
async function main() {
     await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
//-------------------------------------------------------------------
//Routes:
app.get('/',(req,res)=>{
    res.send("server is on");
})
//Index Route:
 app.get('/chats', async(req,res)=>{
    let chats = await chat.find();
    res.render("index.ejs",{chats})
 });
//Create New Chat form:
app.get('/chats/new',(req,res)=>{
    res.render("newchat.ejs")
})
//Create New Chat:
app.post('/chats', async(req,res)=>{
    let {from,to,message} = req.body;
    let newchat = new chat({
        from:from,
        to:to,
        message:message,
        created_at:new Date()
    })
     await newchat.save()
    // .then((res)=>console.log("working")
    // .catch((err)=>console.log(err))  
    console.log(newchat);
    
    res.redirect('/chats') 
})
//Edit Route:
app.get('/chats/:id/edit', async (req, res) => {
    let{id} = req.params;
    let chatData = await chat.findById(id);
    res.render('edit.ejs', { chatData });
});
//Update Route:
app.put('/chats/:id', async(req,res)=>{
    let{id} =req.params;
    let{message:newMesg} = req.body;
    let updatedChat =  await chat.findByIdAndUpdate(id,{message:newMesg},{runValidators:true,new:true});
    res.redirect("/chats")
})
//Delete Route:
app.delete('/chats/:id',async(req,res)=>{
    let{id} =req.params;
    let deletechat = await chat.findByIdAndDelete(id);
    res.redirect('/chats');
})




app.listen(PORT,()=>{console.log(`Server is working on port ${PORT}`)})