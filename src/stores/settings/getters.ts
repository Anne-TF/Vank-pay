import { Counters, PiniaGetters } from 'stores/settings/types';

const getters: PiniaGetters = {
    Lang(state): string | null
    {
        return state.lang;
    },
    DarkMode(state): boolean | null
    {
        return state.darkMode;
    },
    Counter2FAEmail(state): Counters
    {
        return state.counter2FAEmail;
    },
    Counter2FAPhone(state): Counters
    {
        return state.counter2FAPhone;
    }
};

export default getters;
