import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'


// initialize express
const app = express()

// CONNECT to database
await connectDB()


// Middlewares
app. use(cors())


// Route
 app.get('/', (req,res)=> res.send('API is working properly'))
 app.post('/clerk', express.json(),clerkWebhooks)

 //port
 const PORT = process.env.PORT || 5000
  
 app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
 })