import {ValidationResult} from "./ValidationResult";

export class InvalidResult extends ValidationResult {
    constructor(error: string) {
        super(false, error);
    }
}
