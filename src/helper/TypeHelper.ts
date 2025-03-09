export class TypeHelper {
    static Is(object: any, Class: any): boolean {
        while (object != null) {
            if (object === Class.prototype) {
                return true;
            }
            object = Object.getPrototypeOf(object);
        }
        return false;
    }

    static IsSome(object: any, Classes: any[]): boolean {
        for (let i: number = 0; i < Classes.length; i++) {
            if (this.Is(object, Classes[i])) {
                return true;
            }
        }
        return false;
    }

    static IsNone(object: any, Classes: any[]): boolean {
        for (let i: number = 0; i < Classes.length; i++) {
            if (!this.Is(object, Classes[i])) {
                return true;
            }
        }
        return false;
    }

    static IsAll(object: any, Classes: any[]): boolean {
        for (let i: number = 0; i < Classes.length; i++) {
            if (!this.Is(object, Classes[i])) {
                return false;
            }
        }
        return true;
    }

    static As<T>(object: any, Class: any = null): T {
        if (Class === null || this.Is(object, Class)) {
            return object as T;
        }
        return null;
    }
}