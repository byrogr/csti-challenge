import {body} from 'express-validator';

export const cardValidator = () => [
    body('card_number')
        .notEmpty().withMessage("the card_number must be exists")
        .isNumeric().withMessage("the card_number must be a number")
        .isLength({
            min: 13,
            max: 16
        }).withMessage("the card_number must be between 13 to 16 characters"),
    body('cvv')
        .notEmpty().withMessage("the cvv must be exists")
        .isNumeric().withMessage("the cvv must be a number")
        .isLength({
            min: 3,
            max: 4
        }).withMessage("the cvv must be between 3 to 4 characters"),
    body('expiration_month')
        .notEmpty().withMessage("the expiration_month must be exists")
        .isString().withMessage("the expiration_month must be a string")
        .isLength({
            min: 1,
            max: 2
        }).withMessage("the expiration_month must be between 1 to 2 characters"),
    body('expiration_year')
        .notEmpty().withMessage("the expiration_year must be exists")
        .isString().withMessage("the expiration_year must be a string")
        .isLength({
            max: 4
        }).withMessage("the expiration_year must be 4 max characters"),
    body('email')
        .notEmpty().withMessage("the email must be exists")
        .isString().withMessage("the email must be a string")
        .isLength({
            min: 5,
            max: 100
        }).withMessage("the email must be between 5 to 100 characters")
        .custom(async value => {
            const allowDomains = ['gmail.com', 'hotmail.com', 'yahoo.es'];
            const emailDomain = value.split('@')[1];
            if (!allowDomains.includes(emailDomain)) {
                throw new Error('email is not valid');
            }
        }).withMessage("the email must be valid")
]
