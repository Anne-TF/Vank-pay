import { Dark } from 'quasar';
import { PiniaActions } from 'stores/settings/types';

const actions: PiniaActions = {
    setLang(lang: string): void
    {
        if (lang.includes('es'))
        {
            this.lang = lang
        }
        else
        {
            this.lang = lang
        }
    },
    setDarkMode(dark: boolean): void
    {
        this.darkMode = dark;
        Dark.set(dark);
    }
};

export default actions;
