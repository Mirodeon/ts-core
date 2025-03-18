import util = require('util');
import {IData} from "../data/IData";

export class Logger {
    static Json(json: IData): void {
        this.Log(util.inspect(json, false, null), "JSON", console.log);
    }

    static Info(message: string): void {
        this.Log(message, "INFO", console.log);
    }

    static Warning(message: string): void {
        this.Log(message, "WARNING", console.warn);
    }

    static Error(message: string): void {
        this.Log(message, "ERROR", console.error);
    }

    static GroupStart(message: string): void {
        this.Log(message, "INFO", console.group)
    }

    static GroupStartJson(json: IData): void {
        this.Log(util.inspect(json, false, null), "JSON", console.group);
    }

    static GroupStartCollapsed(message: string): void {
        this.Log(message, "INFO", console.groupCollapsed);
    }

    static GroupStartCollapsedJson(json: IData): void {
        this.Log(util.inspect(json, false, null), "JSON", console.groupCollapsed);
    }

    static GroupEnd(): void {
        console.groupEnd();
    }

    static Log(message: string, type: string, logging: (message: string) => void): void {
        let d = new Date();
        logging(d.toLocaleString() + " | " + type + ": " + message);
    }
}