import express from 'express'
import connectDB from './db/connect.js'

// Middlewares
import errorHandlerMiddleware from './middleware/error-handler.js'
import notFoundMiddleware from './middleware/not-found.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.get('/', (req, res) => {
  throw new Error('error')
  res.send('welcome')
})

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
