import util = require('util');

export class Logger {
    public static Json(json: {}): void {
        let d = new Date();
        console.log(d.toLocaleString() + " | JSON: " + util.inspect(json, false, null));
    }

    public static Info(message: string): void {
        let d = new Date();
        console.log(d.toLocaleString() + " | INFO: " + message);
    }

    public static Warning(message: string): void {
        let d = new Date();
        console.warn(d.toLocaleString() + " | WARNING: " + message);
    }

    public static Error(message: string): void {
        let d = new Date();
        console.error(d.toLocaleString() + " | ERROR: " + message)
    }
}