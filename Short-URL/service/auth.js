// const sessionIdToUserMap = new Map();
const jwt = require('jsonwebtoken');
const secret = "Vishal@tiwari$";

// function setUser(id,user) {
//     sessionIdToUserMap.set(id,user);
// }
function setUser(user) {//this perticular function make tokens
    return jwt.sign({
        _id:user._id,
        email:user.email,
    },secret);
}

// function getUser(id) {
//     return sessionIdToUserMap.get(id);
// }
function getUser(token) {
    if(!token) return null;
    try{
        return jwt.verify(token, secret); 
    }catch(err){
        return null;
    }
   
}

module.exports = {
    setUser,
    getUser,
}