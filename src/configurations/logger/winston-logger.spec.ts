import { createLogger, format, transports } from 'winston'

jest.mock('winston', () => {
    const mFormat = {
        combine: jest.fn(),
        timestamp: jest.fn(),
        printf: jest.fn(),
    }
    const mTransports = {
        Console: jest.fn(),
        File: jest.fn(),
    }
    const mLogger = {
        info: jest.fn(),
    }
    return {
        format: mFormat,
        transports: mTransports,
        createLogger: jest.fn(() => mLogger),
    }
})

describe('logger', () => {
    afterEach(() => {
        jest.resetAllMocks()
    })
    it('should pass ', () => {
        
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const logger = require('./winston-logger').default

        expect(format.combine).toBeCalledTimes(2)
        expect(format.timestamp).toBeCalledWith({ format: 'YYYY-MM-DD HH:mm:ss' })
        expect(format.printf).toBeCalledWith(expect.any(Function))
        expect(transports.Console).toBeCalledTimes(1)
        expect(transports.File).toBeCalledWith({ filename: 'filename' })
        expect(createLogger).toBeCalledTimes(1)
    })
})
