require('dotenv').config()
const express=require("express")
const app=express();
const PORT= process.env.PORT || 3000

const communicationRouter =require('./routes/communications');
app.use('/communications',communicationRouter)

app.listen(PORT)
console.log(`Listening at port ${PORT}` )