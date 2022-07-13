import { Store } from 'pinia';
import { PiniaActionAdaptor, PiniaGetterAdaptor } from '../types';

export type State = {
    counter: number;
}

export type Getters = {
    doubleCount: number;
};

export type Actions = {
    increment: () => Promise<void>;
};

export type PiniaStore = Store<'test', State, Getters, Actions>;

export type PiniaActions = PiniaActionAdaptor<Actions, PiniaStore>;

export type PiniaGetters = PiniaGetterAdaptor<Getters, PiniaStore>;
