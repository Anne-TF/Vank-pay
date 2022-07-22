// This is just an example,
// so you can safely delete all default props below

import buttons from './buttons';
import fields from './fields';
import forgotPassword from './forgotPassword';
import langs from './langs';
import login from './login';
import validations from './validations';
import verifyEmail from './verifyEmail';

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
    }
};
