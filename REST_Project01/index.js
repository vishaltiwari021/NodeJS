//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const express = require("express")
const users  = require("./MOCK_DATA.json")

const app = express()

const port = 8000

//Route

app.get('/users',(req,res)=>{
    const html = `
    <ul>
    ${users.map((users)=> `<li>${users.first_name}</li>`).join("")}

    </ul>
    `
    res.send(html)
});

app.get('/api/users',(req,res)=>{
    res.json(users);
});

//If we have same api routes than use this synatx:

app.route('/api/users/:id')
.get((req,res)=>{
     const id  = Number(req.params.id);
    const user  =  users.find((user) => user.id === id);
    res.json(user);
}).patch((req,res) =>{
    // Edit the user with id :
    return res.json({ status :  "Pending"});
})
.delete((req,res) =>{
    // Delete the user with id :
    return res.json({ status :  "Pending"});
});


app.post('/api/users',(req,res) =>{
    //TOOD : Create new user :
    return res.json({ status :  "Pending"});
})

app.listen(port,()=>{
    console.log(`App listing on port ${port}`); 
})