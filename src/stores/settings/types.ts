import { Store } from 'pinia';
import { PiniaActionAdaptor, PiniaGetterAdaptor } from '../types';

export type State = {
    lang: string | null;
    darkMode: boolean | null;
}

export type Getters = {
    Lang: string | null;
    DarkMode: boolean | null;
};

export type Actions = {
    setLang: (lang: string) => void;
    setDarkMode: (dark: boolean) => void;
};

export type PiniaStore = Store<'settings', State, Getters, Actions>;

export type PiniaActions = PiniaActionAdaptor<Actions, PiniaStore>;

export type PiniaGetters = PiniaGetterAdaptor<Getters, PiniaStore>;
