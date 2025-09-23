//+++++++++++++++++++++++++++++++++Connecting MongoDB with JS +++++++++++++++++++++++++++++++++++++++
//Basic Knowlwdge about the Schema and Modle in Mongoose...
//By the help of Mongoose...
const mongoose  = require("mongoose");
main().then((res) =>{
    console.log("Connect succesfuly");
}).catch((err) =>{console.log(err);
})
async function main() {
     await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
//--------------------------------------------------------------------------
//here we add Schema of Collection And Model too..
const userSchema  = new mongoose.Schema({name:String,age:Number,gender:String});
const User  = mongoose.model("User",userSchema);
//-----------------------------------------------------------------------------
//inset one User Info:
// const user1 = new User({name:"vishal",age:20,gender:"male"});
// user1.save();
// const user2 = new User({name:"aditya",age:21,gender:"male"});
// user2.save().then((res)=>{
//     console.log(res);
// }).catch((err) => console.log(err)
// )
//-------------------------------------------------------------------------------
//insert Multiple user:
// User.insertMany([{name:"mangal",age:24,gender:"male"},{name:"harsh",age:12,gender:"male"},{name:"anushka",age:20,gender:"female"}])
// .then((res)=>{
//     console.log(res);
    
// })
//-----------------------------------------------------------------------------------
User.findById('68d14911c689c20e5fc95788').then((res) =>{
    console.log(res);
}).catch((err) =>{console.log(err);
})