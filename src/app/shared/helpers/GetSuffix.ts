import { Dark } from 'quasar';

const GetSuffix = (color: string): string =>
{
    return Dark.isActive ? `dark-${color}` : `light-${color}`;
};

export default GetSuffix;