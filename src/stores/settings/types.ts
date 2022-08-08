import { Store } from 'pinia';
import { PiniaActionAdaptor, PiniaGetterAdaptor } from '../types';

export type Counters = {
    counter: number;
    active: boolean
};

export type State = {
    lang: string | null;
    darkMode: boolean | null;
    counter2FAEmail: Counters;
    counter2FAPhone: Counters;
    counterChangePhoneNew: Counters;
    counterChangePhoneOld: Counters;
    counterChangePhoneEmail: Counters;
    viewBalance: boolean;
    viewPersonalInfo: boolean;
}

export type Getters = {
    Lang: string | null;
    DarkMode: boolean | null;
    ViewBalance: boolean;
    Counter2FAEmail: Counters;
    Counter2FAPhone: Counters;
    PersonalInfo: boolean;
};

export type Actions = {
    setLang: (lang: string) => void;
    setBalance: (value: boolean) => void;
    setDarkMode: (dark: boolean) => void;
    setViewPersonalInfo: (value: boolean) => void;
    ActiveCounter2FA: (counter: 'counter2FAPhone' | 'counter2FAEmail', timer: number) => void;
};

export type PiniaStore = Store<'settings', State, Getters, Actions>;

export type PiniaActions = PiniaActionAdaptor<Actions, PiniaStore>;

export type PiniaGetters = PiniaGetterAdaptor<Getters, PiniaStore>;
