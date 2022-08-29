// This is just an example,
// so you can safely delete all default props below

import codeValidation from './codeValidation';
import buttons from './buttons';
import fields from './fields';
import forgotPassword from './forgotPassword';
import langs from './langs';
import login from './login';
import passwordReset from './passwordReset';
import validations from './validations';
import verifyEmail from './verifyEmail';
import accountCreated from './accountCreated';
import balance from './balance';
import transactionHistory from './transactionHistory';
import dates from './dates';
import settings from './settings';
import notifications from './notifications';

export default {
    login: {
        ...login
    },
    fields: {
        ...fields
    },
    validations: {
        ...validations
    },
    buttons: {
        ...buttons
    },
    langs: {
        ...langs
    },
    forgotPassword: {
        ...forgotPassword
    },
    verifyEmail: {
        ...verifyEmail
    },
    passwordReset: {
        ...passwordReset
    },
    codeValidation: {
        ...codeValidation
    },
    accountCreated: {
        ...accountCreated
    },
    balance: {
        ...balance
    },
    transactionHistory: {
        ...transactionHistory
    },
    dates: {
        ...dates
    },
    settings: {
        ...settings
    },
    notifications: {
        ...notifications
    }
};
