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
}

export type Getters = {
    Lang: string | null;
    DarkMode: boolean | null;
    Counter2FAEmail: Counters;
    Counter2FAPhone: Counters;
};

export type Actions = {
    setLang: (lang: string) => void;
    setDarkMode: (dark: boolean) => void;
    ActiveCounter2FA: (counter: 'counter2FAPhone' | 'counter2FAEmail', timer: number) => void;
};

export type PiniaStore = Store<'settings', State, Getters, Actions>;

export type PiniaActions = PiniaActionAdaptor<Actions, PiniaStore>;

export type PiniaGetters = PiniaGetterAdaptor<Getters, PiniaStore>;
