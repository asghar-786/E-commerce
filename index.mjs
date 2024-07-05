import express, { request, response } from 'express'
const app=express();
const PORT=5000

app.get('/',async(request,response)=>{
    const result={
        code:200,
        status:"ok",
        message:"Express Server Is Running"
    }
    response.send(result)
})

const startServer=async()=>{
    try{
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`)
        })
    }catch(error){
        throw error
    }
}

startServer()