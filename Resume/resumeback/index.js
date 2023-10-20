const express=require('express')
const app=express()


const bodyParser = require('body-parser')
app.use(bodyParser.json())

const cors=require('cors')
app.use(cors())
app.use(express.static(`${__dirname}/upload`));
app.use(bodyParser.urlencoded({extended:false}))
const router=require("./routes")
app.use("/",router)

const db=require('./dbconnection')

app.listen(4003,()=>{
    console.log("server started")
})