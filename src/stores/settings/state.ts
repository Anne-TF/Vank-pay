import { State } from 'stores/settings/types';

const state = (): State =>
{
    return {
        lang: null,
        darkMode: null
    };
};

export default state;
