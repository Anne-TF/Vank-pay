import { Dark } from 'quasar';

declare type Color = 'primary' |
'secondary' |
'tertiary' |
'light-grey' |
'accent'

const GetSuffix = (color: Color): string =>
{
    return Dark.isActive ? `dark-${color}` : `light-${color}`;
};

export default GetSuffix;
