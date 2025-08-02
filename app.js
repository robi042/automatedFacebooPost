console.log(
  ' ############################ AUTOMATED FACEBOOK POST SERVER BOOT ############################ '
)
import Express from 'express'
import cors from 'cors'
import cron from 'node-cron'
import { generatePost } from './src/resolvers/services/generatePost.js'
import { configEnv } from './src/config/config.js'

const app = Express()
app.use(Express.json())
app.use(Express.urlencoded({ limit: '10mb', extended: true }))

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
}

app.use(cors(corsOptions))

const port = configEnv.port

app.get('/', (req, res) => {
  res.send('Hello!')
})

app.get('/generate-post', (req, res) => {
  const post = generatePost()
  res.send(post)
})

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }

  if (err.name === 'ValidationError') {
    res.status(400).json({
      Success: false,
      Status: 400,
      Message: 'Validation error',
      Errors: err.errors
    })
  } else if (
    err.name === 'MongoServerError' ||
    err.name === 'MongoServerSelectionError'
  ) {
    res.status(500).json({
      Success: false,
      Status: 500,
      Message: 'Something went wrong while processing.',
      Stack: err.stack
    })
  } else if (err.name === 'ValidationError') {
    res.status(400).json({
      Success: false,
      Status: 400,
      Message: 'Validation error',
      Errors: err.errors
    })
  } else if (err.name === 'TokenExpiredError') {
    res.status(403).json({
      Success: false,
      Status: 403,
      Message: 'jwt expired',
      Errors: err.errors
    })
  } else {
    const errStatus = err.status || 500
    const errMessage = err.message || 'Something went wrong!'
    res.status(errStatus).json({
      Success: false,
      Status: errStatus,
      Message: errMessage,
      Stack: err.stack
    })
  }
})

cron.schedule(
  '0 22 * * *',
  async () => {
    console.log('Running scheduled job at 10 PM Dhaka time...')
    await generatePost()
  },
  {
    timezone: 'Asia/Dhaka'
  }
)

console.log('Background worker started. Waiting for scheduled jobs...')
setInterval(() => {}, 1000 * 60 * 60)

process.on('SIGTERM', () => {
  console.log('SIGTERM received, exiting gracefully...')
  process.exit(0)
})

app.listen(port, () => {
  console.log(`Eudika are listening on port ${port}`)
})
