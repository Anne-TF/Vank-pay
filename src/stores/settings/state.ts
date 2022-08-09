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
        counterChangeEmailNew: {
            counter: 60,
            active: false
        },
        counterChangeEmailOld: {
            counter: 60,
            active: false
        },
        counterChangeEmailPhone: {
            counter: 60,
            active: false
        },
        counterChangeAuthyPhone: {
            counter: 60,
            active: false
        },
        counterChangeAuthyEmail: {
            counter: 60,
            active: false
        },
        viewBalance: true,
        viewPersonalInfo: true,
        showMobileMenu: true
    };
};

export default state;
