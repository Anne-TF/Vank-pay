import axios, { AxiosInstance } from 'axios';

const headersPublic = {
    'Content-Type': 'application/json',
    'Accept': '*/*'
};

const headersPrivate = {
    'Content-Type': 'application/json',
    'Accept': '*/*',
    'Authentication': null
};

export class AxiosFactory
{
    static getAxiosInstance(baseURL: string, isPrivate = false, timeout = 3000): AxiosInstance
    {
        let config = { baseURL, timeout, headers: headersPrivate } as Record<string, unknown>;

        if (!isPrivate)
        {
            config = { baseURL, timeout, headers: headersPublic };
        }

        return axios.create(config);
    }
}
