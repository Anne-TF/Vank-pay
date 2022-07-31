import { Store } from 'pinia';
import { PiniaActionAdaptor, PiniaGetterAdaptor } from '../types';

export type LoginForm = {
    mode: 'email' | 'phone',
    emailOrPhone: string | null;
    password: string | null;
    code: string | null;
}

export type SignUpForm = {
    email: string | null;
    password: string | null;
    confirmPassword: string | null;
    acceptedTerms: boolean;
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
    email: string | null;
    phone: string | null;
    loginForm: LoginForm;
    signUpForm: SignUpForm;
    active2FA: Active2FA;
}

export type Getters = {
    LoginForm: LoginForm | null;
    SignUpForm: SignUpForm;
    Active2FA: Active2FA
    Token: string | null;
    PreAuth: boolean;
    FullAuth: boolean;
    UserName: string | null;
    Email: string | null;
    Phone: string | null;
};

export type Actions = {
    setLoginForm: (data: LoginForm) => void;
    setSignUpForm: (data: SignUpForm) => void;
    setActive2FA: (data: Active2FA) => void
    setToken: (value: string) => void;
    setPreAuth: (value: boolean) => void;
    setUserName: (value: string) => void;
    setEmail: (value: string) => void;
    setPhone: (value: string) => void;
    clearLoginForm: () => void;
    clearSignUpForm: () => void;
};

export type PiniaStore = Store<'auth', State, Getters, Actions>;

export type PiniaActions = PiniaActionAdaptor<Actions, PiniaStore>;

export type PiniaGetters = PiniaGetterAdaptor<Getters, PiniaStore>;
