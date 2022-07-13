import { PiniaGetters } from 'stores/test/types';

const getters: PiniaGetters = {
    doubleCount(_state)
    {
        return _state.counter * 2;
    }
};

export default getters;
