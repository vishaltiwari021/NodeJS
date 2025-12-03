const mongoose  = require("mongoose");
const {Schema} = mongoose;

main().then(()=>{
    console.log("connetion to DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}
//Database Relationship:--
//Approch3:one-to-many:----

const userSchema = new Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
})
const postSchema  = new Schema({
    content:{
        type:String,
    },
  
    likes:{
        type:Number,
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
    }
  
});

const User  = mongoose.model("User",userSchema)
const Post  = mongoose.model("Post",postSchema)

const addData  = async ()=>{
    let user1 = new User ({
        username:"vishal",
        email:"vishal@outlook.com"
    }) ;
    let post1  = new Post({
        content:"hello world",
        likes:5,
    });

    post1.user  = user1;

    await user1.save();
    await post1.save();
}

addData();