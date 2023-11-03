const express = require('express')
const app = express()

//Middleware
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('welcome to my app')
})

app.post('/post', (req,res)=>{
    const { Name, Age} = req.body
    console.log(Name, Age)
    res.send('Parameters sent')
})
//connect DB

app.listen(3003, ()=>{
    console.log('server is listening on port 3003')
})



