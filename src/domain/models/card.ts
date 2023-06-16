export interface ICard {
    email: string,
    cardNumber: number,
    cvv: number,
    expirationYear: string,
    expirationMonth: string,
}
export default class Card {
    email: string;
    cardNumber: number;
    cvv: number;
    expirationYear: string;
    expirationMonth: string;

    constructor(email: string, cardNumber: number, cvv: number, expirationYear: string, expirationMonth: string) {
        this.email = email;
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.expirationYear = expirationYear;
        this.expirationMonth = expirationMonth;
    }
}
