//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//schema of the collection:
const mongoose  = require("mongoose");

const chatSchema = new mongoose.Schema({
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    message:{
        type:String,
    },
    created_at:{
        type:Date,
        required:true
    }
})

const Chat = new mongoose.model("Chat",chatSchema);
// let chat1  =  new Chat({
//     from:"vishal",
//     to:"patnajali",
//     message:"fuck you bitch",
//     created_at : new Date(),

// }) 
// chat1.save();

// let chat2  =  new Chat({
//     from:"patnajali",
//     to:"vishal",
//     message:"so sweet off you",
//     created_at : new Date(),

// })
// chat2.save(); 

module.exports = Chat;