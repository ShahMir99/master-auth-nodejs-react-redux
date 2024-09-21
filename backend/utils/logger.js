import winston from "winston";
import {fileURLToPath} from "url"
import {dirname, join } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const timestampFormat = winston.format.printf(({ timestamp, level, message, stack }) => {
  const formattedTimestamp = new Date(timestamp).toLocaleString();
  return stack
    ? `${formattedTimestamp} [${level}]: ${message}`
    : `${formattedTimestamp} [${level}]: ${message}`;
});

// Create logger with colorized output for console
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    timestampFormat
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'backend/logs/error.log', level: 'error' })
  ]
});

winston.addColors({
  info: 'blue',
  warn: 'yellow',
  error: 'red'
});

export default logger
