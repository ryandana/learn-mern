import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'
import connectDB from './config/db.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: true, credentials: true }));

app.use(cookieParser())

await connectDB()

app.use('/api/auth', authRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`)
})