import { AxiosInstance, AxiosResponse } from 'axios';
import routes from 'src/repositories/auth/routes';
import { AxiosFactory } from 'src/app/factories';
import PreLoginPayload from 'src/repositories/auth/payloads/PreLoginPayload';
import getUrl from 'src/app/shared/helpers/GetUrl';

export default class QoriPayRepository
{
    private client: AxiosInstance;
    private readonly baseURL: string;
    private readonly routes;

    constructor()
    {
        this.baseURL = <string>(routes?.baseURL ?? process.env.API_URL);
        this.routes = routes.routes;
        this.client = AxiosFactory.getAxiosInstance(this.baseURL, false, 1000000);
    }

    async preLogin(payload: PreLoginPayload): Promise<AxiosResponse>
    {
        return await this.client.post(getUrl(this.routes.module), payload);
    }
}
