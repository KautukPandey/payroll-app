const express = require('express')
const app = express()
const PORT = 4000

app.use(express.json())
app.use(express.static('public'))
app.set('view engine','ejs')


app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
    
})