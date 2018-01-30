const winston = require('winston');
const winstonDaily = require('winston-daily-rotate-file');
const moment = require('moment');

const logDir = 'log';

const timeStampFormat = () => moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');

const logger = new (winston.Logger)({
    transports:[
        new (winstonDaily)({
            name: 'info-file',
            filename: `${logDir}/-server.log`,
            datePattern: 'yyyy-MM-dd',
            prepend: true,
            localTime: true,
            maxsize: 50000000,
            maxFiles: 1000,
            level: 'info',
            colorize: false,
            showLevel: true,
            json: false,
            eol: '\r\n',
            timestamp: timeStampFormat
        }),
        new (winston.transports.Console)({
            name: 'debug-console',
            colorize: true,
            level: 'debug',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        })
    ],
    exceptionHandlers: [
        new (winstonDaily)({
            name: 'exception-file',
            level: 'error',
            filename: `${logDir}/-exception.log`,
            datePattern: 'yyyy-MM-dd',
            prepend: true,
            localTime: true,
            colorize: false,
            maxsize: 50000000,
            maxFiles: 1000,
            showLevel: true,
            json: false,
            eol: '\r\n',
            timestamp: timeStampFormat
        }),
        new (winston.transports.Console)({
            name: 'exception-console',
            level: 'debug',
            timestamp: timeStampFormat,
            colorize: true,
            showLevel: true,
            json: false
        })
    ]
});

logger.on('logged', (info) => {
    const awsS3 = require('lib/awsS3');
    awsS3.uploadLogFile();
});

logger.on('error', (error) => {
    const awsS3 = require('lib/awsS3');
    awsS3.uploadLogFile();
});

module.exports = logger;