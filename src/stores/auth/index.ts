import { defineStore } from 'pinia';
import 'src/plugins/piniaPersist/core/types';
import state from 'stores/auth/state';
import getters from 'stores/auth/getters';
import actions from 'stores/auth/actions';

export const useAuthStore = defineStore('auth', {
    state,
    getters,
    actions,
    persist: {
        exclude: ['loginForm.password']
    }
});
