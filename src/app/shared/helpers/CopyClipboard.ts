import { Platform } from 'quasar';
import { Clipboard } from '@capacitor/clipboard';
import useClipboard from 'vue-clipboard3';

const { toClipboard } = useClipboard();

const CopyClipboard = async(value: string): Promise<void> =>
{
    if (Platform.is.android && Platform.is.capacitor)
    {
        await Clipboard.write({
            string: value
        });
    }
    else
    {
        await toClipboard(value);
    }
};

export default CopyClipboard;
