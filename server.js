
const express = require('express')
const app = express()


app.get('/',(req,res)=>{
res.send('Welcome To World rest api')

})

app.listen(9060,()=>console.log('server started'))
