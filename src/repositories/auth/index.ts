import { AxiosInstance, AxiosResponse } from 'axios';
import routes from 'src/repositories/auth/routes';
import { AxiosFactory } from 'src/app/factories';
import PreLoginPayload from 'src/repositories/auth/payloads/PreLoginPayload';
import getUrl from 'src/app/shared/helpers/GetUrl';
import SendEmailCodePayload from 'src/repositories/auth/payloads/SendEmailCodePayload';
import SendSmsCodePayload from 'src/repositories/auth/payloads/SendSmsCodePayload';
import LoginPayload from 'src/repositories/auth/payloads/LoginPayload';

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

    async sendCode(payload: SendEmailCodePayload | SendSmsCodePayload): Promise<AxiosResponse>
    {
        return await this.client.post(getUrl(this.routes.module), payload);
    }

    async login(payload: LoginPayload): Promise<AxiosResponse>
    {
        return await this.client.post(getUrl(this.routes.module), payload);
    }
}
