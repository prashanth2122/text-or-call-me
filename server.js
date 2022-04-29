const express=require("express")
const app=express();

const communicationRouter =require('./routes/communications');
app.use('/communications',communicationRouter)

app.listen(3000)
console.log("server running in 3000")