import { State } from 'stores/auth/types';

const state = (): State =>
{
    return {
        token: null,
        userName: null,
        preAuth: false,
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
        }
    };
};

export default state;
