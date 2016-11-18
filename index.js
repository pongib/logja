const winston = require('winston')

const optsConsole = {
  level: 'debug',
  json: false,
  colorize: true,
  handleExceptions: true,
  humanReadableUnhandledException: true,
};

const logger = new winston.Logger({
  transports: [
    new winston.transports.Console(optsConsole),
    new (winston.transports.File)({ filename: 'somefile.log', level: 'warn' })
  ],
  exitOnError: false,
});


logger.log('silly', "no display");
logger.log('debug', "console");
logger.log('verbose', "console");
logger.log('info', "console");
logger.log('warn', "console and file");
logger.log('error', "console and file");
logger.info("console");
logger.warn("console and file");
logger.error("console and file");
