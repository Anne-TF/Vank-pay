// This is just an example,
// so you can safely delete all default props below
import verifyEmail from './verifyEmail';
import buttons from './buttons';
import fields from './fields';
import forgotPassword from './forgotPassword';
import langs from './langs';
import login from './login';
import validations from './validations';
import passwordReset from './passwordReset';
import codeValidation from './codeValidation';

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
    }
};
