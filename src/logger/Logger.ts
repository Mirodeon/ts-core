import {IData} from "../data/IData";

export class Logger {
    static Json(json: IData): void {
        this.Log(json, "JSON", console.log);
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
        this.Log(json, "JSON", console.group);
    }

    static GroupStartCollapsed(message: string): void {
        this.Log(message, "INFO", console.groupCollapsed);
    }

    static GroupStartCollapsedJson(json: IData): void {
        this.Log(json, "JSON", console.groupCollapsed);
    }

    static GroupEnd(): void {
        console.groupEnd();
    }

    static Log(message: string | IData, type: string, logging: (message: string) => void): void {
        let d = new Date();
        if (typeof message === 'string') {
            logging(d.toLocaleString() + " | " + type + ": " + message);
            return;
        }
        try {
            logging(d.toLocaleString() + " | " + type + ": " + message);
        } catch {
            logging(d.toLocaleString() + " | " + type + ": " + this.StringifySafe(message));
        }
    }

    private static StringifySafe(value: unknown, space = 2): string {
        const seen = new WeakSet<object>();
        const replacer = (_k: string, v: any) => {
            if (typeof v === 'bigint') return `${v.toString()}n`;
            if (v instanceof Date) return v.toISOString();
            if (v instanceof Error) return {name: v.name, message: v.message, stack: v.stack};
            if (v instanceof Map) return {__type: 'Map', value: Array.from(v.entries())};
            if (v instanceof Set) return {__type: 'Set', value: Array.from(v.values())};
            if (typeof v === 'object' && v !== null) {
                if (seen.has(v)) return '[Circular]';
                seen.add(v);
            }
            return v;
        };
        try {
            return JSON.stringify(value, replacer, space);
        } catch {
            // dernier filet
            return Object.prototype.toString.call(value);
        }
    }
}