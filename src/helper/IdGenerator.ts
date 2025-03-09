import {v4 as uuidv4} from 'uuid';

export class IdGenerator {
    static V4(): string {
        return uuidv4();
    }
}