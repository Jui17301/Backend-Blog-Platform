/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// import cookieParser from 'cookie-parser';
// import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

//parsers
app.use(express.json());
// app.use(cookieParser());

// application routes
app.use('/api', router);

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

// Route not found is not an error , it is an statement same as API NOT FOUND
app.use("*",(req:Request,res:Response)=>{
    res.status(404).json({
        status:false,
        message:'Route not found'
    })
})

export default app;
