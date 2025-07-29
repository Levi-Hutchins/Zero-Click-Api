import { createLogger, transports, format } from 'winston';
import chalk from 'chalk';


const { combine, timestamp, printf } = format;

const customFormat = printf(({ level, message, timestamp }) => {
    const LogLevel = level.toUpperCase();
    switch (level) {
        case 'error':
            return chalk.red(`[${LogLevel}]: ${message} [${timestamp}]\n`);
        case 'warn':
            return chalk.yellow(`[${LogLevel}]: ${message} [${timestamp}]\n`);
        case 'info':
            return chalk.green(`[${LogLevel}]: ${message} [${timestamp}]\n`);
        case 'debug':
            return chalk.blue(`[${LogLevel}]: ${message} [${timestamp}]\n`);
        default:
            return `[${level}]: ${LogLevel} [${timestamp}]\n`;
}
    }
);

export const logger = createLogger({
  level: 'debug',
  format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),

        customFormat,
    
  ),
  transports: [
    new transports.Console()
  ]
});

