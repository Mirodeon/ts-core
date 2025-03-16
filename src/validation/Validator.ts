export class Validator {
    static ValidEmail(email: string): boolean {
        let regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regularExpression.test(String(email).toLowerCase());
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
        if (password != null) {
            return password.length >= 6;
        }

        return true;
    }
}