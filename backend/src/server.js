import express from 'express'
import { connectdb } from './config/db.js'
import { env } from './config/env.js'
import app from './app.js'

const startServer=async()=>{
    try {
        await connectdb()
        app.listen(env.PORT,()=>{
            console.log(`Server is running on port ${env.PORT} by ${env.AUTHOR}`)
        })
    } catch (err) {
        console.error('Failed to start server:', err.message);
        process.exit(1)
    }
}

startServer()