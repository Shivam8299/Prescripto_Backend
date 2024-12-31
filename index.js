import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 3000

// middlewares
app.use(express.json());
app.use(cors())

app.get('/', (req,res)=>{
    res.send('hello from server side')
})

app.listen(port, (error)=>{
    !error ? console.log(`server is runing on port ${port}`) : 
    console.log(error) 
    
})
