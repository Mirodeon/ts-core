export class StageType {
    static IsProd(): boolean {
        return process.env.stage == 'prod';
    }

    static IsTest(): boolean {
        return process.env.stage == 'test';
    }

    static IsDev(): boolean {
        return process.env.stage == 'dev';
    }

    static IsOnCloud(): boolean {
        return this.IsProd() || this.IsTest();
    }

    static GetValue(): string {
        return process.env.stage;
    }
}