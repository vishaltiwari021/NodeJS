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
//Approch1:one-to-few:----
const userSchema  = new Schema({
    username:{
        type:String,
    },
    addresses:[
        {
            _id: false,
            location:{
                type:String
            },
            city:{
                type:String
            }
        }
    ]
});

const User  = mongoose.model("User",userSchema);

const addUser = async()=>{
    let user1  = new User({
        username:"vishal",
        addresses:[{
            location:"hari parvat choraha",
            city:"agra"
        }],
    })
    user1.addresses.push({location:"hing ki mandi",city:"kolkata"});
    let result  = await user1.save();
    console.log(result);
};
addUser();


