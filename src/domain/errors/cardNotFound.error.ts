export default class CardNotFoundError extends Error {
    constructor(message? : string) {
        super(message);
    }
}
