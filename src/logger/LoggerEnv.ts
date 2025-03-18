import {Logger} from "./Logger";

export class LoggerEnv extends Logger {
    private static IsActivated(): boolean {
        try {
            const logActivated = process.env.log_activated
            return logActivated === 'true';
        } catch (error) {
            return false;
        }
    }

    private static ConditionalLog<T>(message: T, logging: (message: T) => void): void {
        if (this.IsActivated()) {
            logging(message);
        }
    }

    static Log(message: string, type: string, logging: (message: string) => void): void {
        this.ConditionalLog(message, (message: string) => {
            super.Log(message, type, logging);
        });
    }
}