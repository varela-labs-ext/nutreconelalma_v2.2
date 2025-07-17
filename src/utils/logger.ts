// src/utils/logger.ts

import localforage from 'localforage';

type LogLevel = 'LOG' | 'INFO' | 'WARN' | 'ERROR';

const isProduction = import.meta.env.MODE === 'production';
const STORAGE_KEY = 'devLogs';

interface LogEntry {
    timestamp: string;
    level: LogLevel;
    message: unknown;
    context: string;
}

const getFormattedTimestamp = (): string => {
    const now = new Date();
    return now.toISOString().replace('T', ' ').substring(0, 19);
};

const getStyleByLevel = (level: LogLevel): string => {
    switch (level) {
        case 'INFO':
            return 'color: dodgerblue;'; //font-weight: bold;
        case 'WARN':
            return 'color: orange;'; //font-weight: bold;
        case 'ERROR':
            return 'color: red; font-weight: bold;';
        default:
            return 'color: gray;';
    }
};

const inferCallerContext = (): string => {
    const stack = new Error().stack;
    if (!stack) return 'Unknown';
    const lines = stack.split('\n');
    const callerLine = lines[3] || '';
    const match = callerLine.match(/(?:at\s+)?(.+?):(\d+):\d+/);
    if (match) {
        const file = match[1].split('/').pop();
        const line = match[2];
        return `${file}:${line}`;
    }
    return 'Unknown';
};

const saveLogToStorage = async (entry: LogEntry): Promise<void> => {
    try {
        const currentLogs = (await localforage.getItem<LogEntry[]>(STORAGE_KEY)) || [];
        currentLogs.push(entry);
        await localforage.setItem(STORAGE_KEY, currentLogs);
    } catch (err) {
        console.warn('Logger: failed to persist log entry', err);
    }
};

const logMessage = (level: LogLevel, message: unknown, context?: string): void => {
    if (isProduction) return;

    const timestamp = getFormattedTimestamp();
    // const resolvedContext = context ; // || inferCallerContext();
    // const tag = `[${timestamp}] [${level}] [${resolvedContext}]`;
    const tag = `[${timestamp}] [${level}]${context ? ` [${context}]` : ''}`;
    const style = getStyleByLevel(level);

    switch (level) {
        case 'INFO':
            console.info(`%c${tag}`, style, message);
            break;
        case 'WARN':
            console.log(`%c${tag}`, style, message);
            break;
        case 'ERROR':
            console.error(`%c${tag}`, style, message);
            break;
        default:
            console.log(`%c${tag}`, style, message);
            break;
    }

    // void saveLogToStorage({ timestamp, level, message, context: resolvedContext });
};

export const Logger = {
    log: (message: unknown, context?: string) => logMessage('LOG', message, context),
    info: (message: unknown, context?: string) => logMessage('INFO', message, context),
    warn: (message: unknown, context?: string) => logMessage('WARN', message, context),
    error: (message: unknown, context?: string) => logMessage('ERROR', message, context),

    async getStoredLogs(): Promise<LogEntry[]> {
        return (await localforage.getItem<LogEntry[]>(STORAGE_KEY)) || [];
    },

    async clearStoredLogs(): Promise<void> {
        await localforage.removeItem(STORAGE_KEY);
    },
};

export const getClassName = (instance: unknown): string => {
    return instance?.constructor?.name ?? 'Unknown';
};
