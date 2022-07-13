import { REPOSITORIES } from 'src/repositories/index';
import ITestRepository from 'src/repositories/test/ITestRepository';

export interface IBootRepositories {
    [REPOSITORIES.ITestRepository]: ITestRepository
}
