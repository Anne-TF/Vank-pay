import { PiniaGetters } from 'stores/auth/types';

const getters: PiniaGetters = {
    LoginForm: (state) =>
    {
        return state.loginForm;
    },
    Active2FA: (state) =>
    {
        return state.active2FA;
    },
    Token: (state) =>
    {
        return state.token;
    },
    PreAuth: (state) =>
    {
        return state.preAuth;
    },
    FullAuth: (state) =>
    {
        return Boolean(state.token);
    },
    UserName: (state) =>
    {
        return state.userName;
    }
};

export default getters;
