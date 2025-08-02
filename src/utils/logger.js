import winston from 'winston'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const logFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.printf(
    ({ timestamp, level, message, stack }) =>
      `${timestamp} [${level.toUpperCase()}]: ${message} ${
        stack ? '\n' + stack : ''
      }`
  )
)

export const logger = winston.createLogger({
  level: 'error',
  format: logFormat,
  transports: [
    new winston.transports.File({
      filename: path.join(__dirname, '../logs/error.log'),
      level: 'error',
      maxsize: 5 * 1024 * 1024,
      maxFiles: 3
    }),
    new winston.transports.Console()
  ]
})
