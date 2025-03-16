export class Validator {
    private static minPasswordLength: number = 6;
    private static minUsernameLength: number = 4;
    private static emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    static ValidEmail(email: string): boolean {
        return this.emailRegex.test(String(email).toLowerCase());
    }

    static ValidEmails(emails: string[]): boolean {
        for (let email of emails) {
            if (!this.ValidEmail(email)) {
                return false;
            }
        }

        return true;
    }

    static ValidPassword(password: string): boolean {
        return password != null && password.length >= this.minPasswordLength;
    }

    static ValidUsername(username: string): boolean {
        return username != null && username.length >= this.minUsernameLength;
    }
}