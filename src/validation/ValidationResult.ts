export class ValidationResult {
    result: boolean;
    error: string;

    constructor(result: boolean, error?: string) {
        this.result = result;
        this.error = error;
    }
}
