const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    timestampFormat
  ),
  transports: [
    new winston.transports.Console()
    // Removed file transport
    // new winston.transports.File({ filename: 'backend/logs/error.log', level: 'error' })
  ]
});