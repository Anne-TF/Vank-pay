import { State } from 'stores/settings/types';

const state = (): State =>
{
    return {
        lang: null,
        darkMode: null,
        counter2FAPhone: {
            counter: 60,
            active: false
        },
        counter2FAEmail: {
            counter: 60,
            active: false
        },
        viewBalance: true
    };
};

export default state;
