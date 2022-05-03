import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'
// db and authenticate users
import connectDB from './db/connect.js'

// routers
import authRoutes from './routes/authRoutes.js'
import jobRouter from './routes/jobsRoutes.js'
// Middlewares
import errorHandlerMiddleware from './middleware/error-handler.js'
import notFoundMiddleware from './middleware/not-found.js'

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ msg: 'welcome' })
})

app.get('/api/v1', (req, res) => {
  res.json({ msg: 'welcome' })
})

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/jobs', jobRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 6000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, (req, res) => {
      console.log(`server is running on port ${port}`)
    })
  } catch (err) {
    console.log(err)
  }
}

start()
