import ITestRepository from 'src/repositories/test/ITestRepository';
import { AxiosInstance, AxiosResponse } from 'axios';
import routes from 'src/repositories/test/routes';
import { AxiosFactory } from 'src/app/factories';
import TestPayload from 'src/repositories/test/payloads/TestPayload';
import getUrl from 'src/app/shared/helpers/GetUrl';

export default class TestRepository implements ITestRepository
{
    private client: AxiosInstance;
    private readonly baseURL: string;
    private readonly routes;

    constructor()
    {
        this.baseURL = routes?.baseURL ?? 'https://api.example.com';
        this.routes = routes.routes;
        this.client = AxiosFactory.getAxiosInstance(this.baseURL, false, 1000000);
    }

    async test(payload: TestPayload): Promise<AxiosResponse<string>>
    {
        return await this.client.post(getUrl(this.routes.test.test), payload);
    }

}
