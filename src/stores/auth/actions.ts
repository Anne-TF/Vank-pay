import { PiniaActions } from 'stores/auth/types';

const actions: PiniaActions = {
    setUserName(value)
    {
        this.userName = value;
    },
    setActive2FA(value)
    {
        this.active2FA = value;
    },
    setLoginForm(value)
    {
        this.loginForm = value;
    },
    setSignUpForm(value)
    {
        this.signUpForm = value;
    },
    setPreAuth(value)
    {
        this.preAuth = value;
    },
    setToken(value)
    {
        this.token = value;
    },
    setEmail(value)
    {
        this.email = value;
    },
    setPhone(value)
    {
        this.phone = value;
    },
    clearLoginForm()
    {
        this.loginForm = {
            mode: 'email',
            emailOrPhone: null,
            password: null,
            code: null
        };
    },
    clearSignUpForm()
    {
        this.signUpForm = {
            email: null,
            password: null,
            confirmPassword: null,
            acceptedTerms: false
        };
    }
};

export default actions;
