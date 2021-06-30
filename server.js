
const express = require('express')
const app = express()


app.get('/home',(req,res)=>{
res.send('Welcome To World rest api')

})

app.listen(9070,()=>console.log('server started'))
