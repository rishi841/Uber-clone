import express from 'express';

const app=express()

app.get("/",(req,res)=>{
    res.send('hii laise ho')
})

export default app;