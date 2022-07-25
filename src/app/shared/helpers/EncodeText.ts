declare type AuthType = 'email' | 'phone' | 'authy';

const EncodeText = (text: string, type: AuthType): string =>
{
    if (type === 'email')
    {
        const aux = text.split('@');
        const aux2 = aux[1].split('.');
        return aux[0]
            .slice(0, 3)
            .concat(
                aux[0]
                    .slice(3, aux[0].length)
                    .split('')
                    .map(() => '*')
                    .join()
                    .replace(/,/g, ''),
                '@'
            )
            .concat(
                aux2[0]
                    .split('')
                    .map(() => '*')
                    .join()
                    .replace(/,/g, ''),
                '.',
                aux2[1]
            );
    }
    else if (type === 'phone')
    {
        return text.slice(0, 7).concat(
            text
                .slice(7, text.length - 2)
                .split('')
                .map(() => '*')
                .join()
                .replace(/,/g, '')
                .concat(text.slice(text.length - 2, text.length))
        );
    }
    return text;
};

export default EncodeText;
