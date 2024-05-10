import express, { Application } from "express";
import { Response,Request } from "express";
import './database/db'
import 'dotenv/config'
const app : Application = express()

app.get('/',(req:Request, res:Response)=>{
    res.send('hello world')
})


app.use(express.json)
app.use(express.urlencoded({extended:true}))


app.listen(
    process.env.PORT,
    ()=>console.log(`app is listen in http://localhost:${process.env.PORT}`)

)