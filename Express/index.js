//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const express  =require("express")
//here app is handler:
const app = express()

//Port :
const port = 3000

//Handler function :
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about',(req,res) =>{
    res.send(`hello ${req.query.name}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
