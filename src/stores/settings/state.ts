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
        counterChangePhoneNew: {
            counter: 60,
            active: false
        },
        counterChangePhoneOld: {
            counter: 60,
            active: false
        },
        counterChangePhoneEmail: {
            counter: 60,
            active: false
        },
        viewBalance: true,
        viewPersonalInfo: true
    };
};

export default state;
