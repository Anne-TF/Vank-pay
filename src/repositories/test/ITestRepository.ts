import TestPayload from 'src/repositories/test/payloads/TestPayload';
import { AxiosResponse } from 'axios';

interface ITestRepository
{
    test(payload: TestPayload): Promise<AxiosResponse<string>>;
}

export default ITestRepository;
