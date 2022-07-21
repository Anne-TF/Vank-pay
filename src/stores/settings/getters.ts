import { PiniaGetters } from 'stores/settings/types';

const getters: PiniaGetters = {
    Lang(state): string | null
    {
        return state.lang;
    },
    DarkMode(state): boolean | null
    {
        return state.darkMode;
    }
};

export default getters;
