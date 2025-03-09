export class DateHelper {
    public static readonly secondMs: number = 1000;
    public static readonly minuteMs: number = 60000;
    public static readonly hourMs: number = 3600000;
    public static readonly dayMs: number = 86400000;
    public static readonly weekMs: number = 604800000;
    public static readonly monthMs: number = 2628000000;
    public static readonly yearMs: number = 31536000000;

    public static GetDate(date: Date): string {
        return date.toISOString().split('T')[0];
    }

    public static GetDateTime(date: Date): string {
        return date.toISOString();
    }

    public static GetTime(date: Date): string {
        return date.toISOString().split('T')[1].split('.')[0];
    }

    public static ParseDate(date: string): Date {
        return new Date(date);
    }

    public static ParseDateTime(date: string): Date {
        return new Date(date);
    }

    public static ParseTime(date: string): Date {
        return new Date('1970-01-01T' + date);
    }
}