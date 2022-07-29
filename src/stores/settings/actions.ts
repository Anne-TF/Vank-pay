import { Dark } from 'quasar';
import { Counters, PiniaActions } from 'stores/settings/types';

const actions: PiniaActions = {
    setLang(lang: string): void
    {
        if (lang.includes('es'))
        {
            this.lang = lang;
        }
        else
        {
            this.lang = lang;
        }
    },
    setDarkMode(dark: boolean): void
    {
        this.darkMode = dark;
        Dark.set(dark);
    },
    ActiveCounter2FA(counter, timer = 60): void
    {
        if (this[counter].counter > 0 && this[counter].active)
        {
            setTimeout(() =>
            {
                this[counter].counter--;
                this.ActiveCounter2FA(counter, timer);
            }, 1000);
        }
        else
        {
            this[counter].active = false;
            this[counter].counter = timer;
        }
    }
};

export default actions;
