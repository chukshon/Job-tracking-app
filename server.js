import express from 'express'
import notFoundMiddleware from './middleware/not-found.js'
const app = express()

app.get('/', (req, res) => {
  res.send('welcome')
})

app.use(notFoundMiddleware)

const port = process.env.PORT || 6000

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})
