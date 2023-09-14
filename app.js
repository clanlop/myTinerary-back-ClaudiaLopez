import 'dotenv/config.js';
import './config/db.js';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import createError from 'http-errors';
import indexRouter from './router/index.router.js';

const app = express();
const PORT = process.env.PORT || 8000;

app.use (express.json());
app.use (express.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(cors());
app.use ((req,res,next)=>{
    console.log('Se ejecuto el middleware que hice')
    next()
});
app.use('/api', indexRouter);
const notFound=(req,res,next)=>{
    next(createError(404, 'la ruta no existe'))
}
const errorHandler=(err,req,res,next)=>{
    console.log(err);
    res.status(err.status || 500).json({
        status:err.status,
        message:err.message  
    }
         
    )
}
app.use(notFound);
app.use(errorHandler)

app.listen(PORT,()=>console.log('Server running on port:' + PORT));


