import { PiniaActions } from 'stores/auth/types';
import { useQoriPayRepository } from 'boot/axios';
import { useRouter } from 'vue-router';

const actions: PiniaActions = {
    setUserName(value)
    {
        this.userName = value;
    },
    setActive2FA(value)
    {
        this.active2FA = value;
    },
    setFullAuth(value)
    {
        this.fullAuth = value;
    },
    setLoginForm(value)
    {
        this.loginForm = value;
    },
    setPreAuth(value)
    {
        this.preAuth = value;
    },
    setToken(value)
    {
        this.token = value;
    }
};

export default actions;
