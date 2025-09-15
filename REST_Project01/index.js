//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const express = require("express")
const users  = require("./MOCK_DATA.json")
const fs  = require("fs");

const app = express()

const port = 8000

//Middleware:
app.use(express.urlencoded({extended: false}));
//example of middleware":
app.use((req,res,next) => {
    fs.appendFile('log.txt' ,`\n${Date.now()},${req.method},${req.path}\n`,(err,data) =>{
        next();
    })
});

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
    res.setHeader("X-Myname","Vishal Tiwari")//custum header
    console.log(res.header);
    
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
    const body  = req.body;
    users.push({...body , id: users.length+1 });
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users) , (err,data) =>{
         return res.json({ status :  "Success",id:users.length});
    }) ;
});

app.listen(port,()=>{
    console.log(`App listing on port ${port}`); 
})