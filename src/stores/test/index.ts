import { defineStore } from 'pinia';
import state from 'stores/test/state';
import getters from 'stores/test/getters';
import actions from 'stores/test/actions';

export const useCounterStore = defineStore('test', {
    state,
    getters,
    actions
});
