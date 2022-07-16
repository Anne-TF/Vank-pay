const GetUrl = (url: string, params: Record<string, unknown> = {}): string =>
{
    const keys: string[] = Object.keys(params);
    return keys.reduce((_url, key): string  =>
    {
        return _url.includes(`:${key}`) ? _url.replace(`:${key}`, <string>params[key]) : _url;
    }, url);
};


export default GetUrl;
