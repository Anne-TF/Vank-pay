
const HideText = (show: boolean, text: string): string =>
{
    return !show ? '****' : text;
};

export default HideText;
