import dotenv from "dotenv"

dotenv.config()

const requiredEnvVars=['MONGO_URL','PORT','AUTHOR'];
requiredEnvVars.forEach((envVars)=>{
      if(!process.env[envVars]){
        throw new Error('Missing required environment variable: ${envVar}')
      }
})

export const env = {
    MONGO_URL: process.env.MONGO_URL,
    PORT: process.env.PORT,
    AUTHOR: process.env.AUTHOR
}
