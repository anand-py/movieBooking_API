const express = require('express')

const connectDb = require("./src/config/db.connection")
const theaterRouter = require("./src/routes/theater.routes")
require('dotenv').config();


const app = express()


app.use(express.json()); // Parse JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies


app.use('/api/v1',theaterRouter)

app.get('/', (req, res) => {
  res.send('Movie Booking API')
})

connectDb()


app.listen(`${process.env.PORT}`,(err)=>{
    if(err){
        console.log("Some error encounter")
    }else{
        console.log(`Server is running on ${process.env.PORT}`)
    }
})