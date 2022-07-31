import { State } from 'stores/auth/types';

const state = (): State =>
{
    return {
        token: null,
        userName: null,
        preAuth: false,
        email: null,
        phone: null,
        active2FA: {
            authy: false,
            correo: false,
            telefono: false
        },
        loginForm: {
            mode: 'email',
            emailOrPhone: null,
            password: null,
            code: null
        },
        signUpForm: {
            email: null,
            password: null,
            confirmPassword: null,
            acceptedTerms: false
        }
    };
};

export default state;
