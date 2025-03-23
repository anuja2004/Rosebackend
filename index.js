require('dotenv').config()
const express = require('express')


const app = express()  //variable app


const port = 3000  //listen on this port

app.get('/', (req, res) => {   //callback
  res.send('Hello World!')
})

app.get('/twitter',(req, res)=>{
    res.send('<h1>Helllllllo</h1>')
})
app.get('/insta',(req, res)=>{
  res.send('<h1>Helllll from insta</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
