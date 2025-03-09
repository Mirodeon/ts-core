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

    public static Json(json: {}): void {
        this.ConditionalLog(json, super.Json);
    }

    public static Info(message: string): void {
        this.ConditionalLog(message, super.Info);
    }

    public static Warning(message: string): void {
        this.ConditionalLog(message, super.Warning)
    }

    public static Error(message: string): void {
        this.ConditionalLog(message, super.Error);
    }
}