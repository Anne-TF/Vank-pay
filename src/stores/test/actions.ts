import { PiniaActions } from 'stores/test/types';

const actions: PiniaActions = {
    async increment(): Promise<void>
    {
        this.counter++;
    }
};

export default actions;
