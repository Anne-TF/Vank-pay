import { Store } from 'pinia';
import { PiniaActionAdaptor, PiniaGetterAdaptor } from '../types';

export type LoginForm = {
    mode: 'email' | 'phone',
    emailOrPhone: string | null;
    password: string | null;
    code: string | null;
}

export type Active2FA = {
    correo: boolean;
    telefono: boolean;
    authy: boolean;
}

export type State = {
    preAuth: boolean;
    token: string | null;
    userName: string | null;
    loginForm: LoginForm;
    active2FA: Active2FA;
}

export type Getters = {
    LoginForm: LoginForm | null;
    Active2FA: Active2FA
    Token: string | null;
    PreAuth: boolean;
    FullAuth: boolean;
    UserName: string | null;
};

export type Actions = {
    setLoginForm: (data: LoginForm) => void;
    setActive2FA: (data: Active2FA) => void
    setToken: (value: string) => void;
    setPreAuth: (value: boolean) => void;
    setUserName: (value: string) => void;
};

export type PiniaStore = Store<'auth', State, Getters, Actions>;

export type PiniaActions = PiniaActionAdaptor<Actions, PiniaStore>;

export type PiniaGetters = PiniaGetterAdaptor<Getters, PiniaStore>;
