import { defineStore } from 'pinia';
import state from 'stores/settings/state';
import getters from 'stores/settings/getters';
import actions from 'stores/settings/actions';

export const useSettingsStore = defineStore('settings', {
    state,
    getters,
    actions
});
