import express from 'express'
const app=express();
const PORT=5000

app.use(express.json());
import  dotenv from 'dotenv';
dotenv.config();
import dataSource from './infrastructure/postgres.mjs';
import  path from 'path';

import clientRoute from './routes/clientRoute.mjs'

app.get('/',async(request,response)=>{
    const result={
        code:200,
        status:"ok",
        message:"Express Server Is Running"
    }
    response.send(result)
})

clientRoute(app);

const startServer=async()=>{
    try {
        await dataSource.initialize();
        console.log("Database connection has been established");
        
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Error during server start:", error);
        process.exit(1);
    }
}


export default startServer