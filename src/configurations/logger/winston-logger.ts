'use strict'

import { createLogger, format, transports } from 'winston'

const env = process.env.NODE_ENV || 'development'
const filename = 'filename'

const logger = createLogger({
    level: env === 'development' ? 'debug' : 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
    ),
    transports: [
        new transports.Console({
            level: 'info',
            format: format.combine(format.printf((info) => `${info.level}: ${info.message}`)),
        }),
        new transports.File({ filename }),
    ],
})

export default logger
